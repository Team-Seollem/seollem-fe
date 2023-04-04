import { bookService } from '@apis';
import {
  BookCoverItem,
  BookDetailInfoItem,
  Boxcontainer,
  Button,
  PageTitle,
} from '@components/common';
import { CACHE_KEYS, PAGE_URL } from '@constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { BookStatus } from '../../types/library';
import { SearchBookInfo } from '../../types/basic';

type Props = {
  bookInfoData: SearchBookInfo;
};

function PostBook({ bookInfoData }: Props) {
  const { itemPage } = bookInfoData;
  const [basicBookInfoData, setBasicBookInfoData] = useState({
    ...bookInfoData,
    itemPage: Number(itemPage),
  });

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [bookStatus, setBookStatus] = useState<BookStatus>('YET');
  const [readStartDate, setReadStartDate] = useState<string | null>(null);
  const [readEndDate, setReadEndDate] = useState<string | null>(null);

  const selectList = [
    { typeValue: 'YET', typeText: '읽고 싶은 책' },
    { typeValue: 'ING', typeText: '읽고 있는 책' },
    { typeValue: 'DONE', typeText: '다 읽은 책' },
  ];

  const handleChangeBasicBookInfoData = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'itemPage') {
      setBasicBookInfoData({ ...basicBookInfoData, [name]: Number(value) });
    } else {
      setBasicBookInfoData({ ...basicBookInfoData, [name]: value });
    }
  };

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setBookStatus(value);
    setReadStartDate(null);
    setReadEndDate(null);
  };

  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setCurrentPage(value);
  };

  const postBookInfoData = {
    ...basicBookInfoData,
    currentPage,
    bookStatus,
    readStartDate,
    readEndDate,
  };

  const { mutate } = useMutation(bookService.registerBook);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(postBookInfoData, {
      onSuccess() {
        queryClient.invalidateQueries(CACHE_KEYS.library(bookStatus));
        toast.success('책 등록에 성공했어요.');
        navigate(PAGE_URL.LIBRARY);
      },
    });
  };

  return (
    <>
      <PageTitle title="등록" />
      <Boxcontainer title={basicBookInfoData.title}>
        <BookCoverItem src={basicBookInfoData.cover} />
        <BookDetailInfoItem>
          <form onSubmit={handleSubmit}>
            <label htmlFor="author">저자</label>
            <input
              id="author"
              name="author"
              type="text"
              value={basicBookInfoData.author}
              onChange={handleChangeBasicBookInfoData}
            />
            <label htmlFor="publisher">출판사</label>
            <input
              id="publisher"
              name="publisher"
              type="text"
              value={basicBookInfoData.publisher}
              onChange={handleChangeBasicBookInfoData}
            />
            <label htmlFor="itemPage">전체 페이지</label>
            <input
              id="itemPage"
              name="itemPage"
              type="number"
              value={basicBookInfoData.itemPage || 0}
              onChange={handleChangeBasicBookInfoData}
            />
            <label htmlFor="currentPage">현재 페이지</label>
            <input
              id="currentPage"
              type="number"
              value={currentPage}
              onChange={handleChangeNumber}
            />
            <label htmlFor="bookStatus">읽기 상태</label>
            <select
              id="bookStatus"
              onChange={handleChangeSelect}
              value={bookStatus}
            >
              {selectList.map((item, idx) => (
                <option value={item.typeValue} key={idx}>
                  {item.typeText}
                </option>
              ))}
            </select>
            {bookStatus === 'ING' && (
              <>
                <label htmlFor="readStartDate">읽기 시작한 날 </label>
                <input
                  id="readStartDate"
                  type="datetime-local"
                  onChange={(e) => setReadStartDate(`${e.target.value}:00`)}
                />
              </>
            )}
            {bookStatus === 'DONE' && (
              <>
                <label htmlFor="readStartDate">읽기 시작한 날</label>
                <input
                  id="readStartDate"
                  type="datetime-local"
                  onChange={(e) => setReadStartDate(`${e.target.value}:00`)}
                />
                <label htmlFor="readEndDate">다 읽은 날</label>
                <input
                  id="readEndDate"
                  type="datetime-local"
                  onChange={(e) => setReadEndDate(`${e.target.value}:00`)}
                />
              </>
            )}
            <Button size="small" styleType="solidPositive" type="submit">
              등록하기
            </Button>
          </form>
        </BookDetailInfoItem>
      </Boxcontainer>
    </>
  );
}

export default PostBook;
