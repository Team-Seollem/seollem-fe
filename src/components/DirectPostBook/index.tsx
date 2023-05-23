import { bookService, memoService } from '@apis';
import {
  BookCoverItem,
  BookDetailInfoItem,
  Boxcontainer,
  Button,
  PageTitle,
} from '@components/common';
import { bookStatusList, CACHE_KEYS, PAGE_URL } from '@constants';
import { SearchBookInfo } from '@projects/types/basic';
import { BookStatus } from '@projects/types/library';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

type DirectPostBookProps = {
  directBookInfoData: SearchBookInfo;
};

export default function DirectPostBook({
  directBookInfoData,
}: DirectPostBookProps) {
  const [directBasicBookInfoData, setDirectBasicBookInfoData] = useState({
    ...directBookInfoData,
  });

  const [cover, setCover] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [bookStatus, setBookStatus] = useState<BookStatus>('YET');
  const [readStartDate, setReadStartDate] = useState<string | null>(null);
  const [readEndDate, setReadEndDate] = useState<string | null>(null);
  const handleChangeBasicBookInfoData = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'itemPage') {
      setDirectBasicBookInfoData({
        ...directBasicBookInfoData,
        [name]: Number(value),
      });
    } else {
      setDirectBasicBookInfoData({ ...directBasicBookInfoData, [name]: value });
    }
  };

  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setCurrentPage(value);
  };

  const postBookInfoData = {
    ...directBasicBookInfoData,
    cover,
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
    console.log('postBookInfoData:', postBookInfoData);
    mutate(postBookInfoData, {
      onSuccess() {
        queryClient.invalidateQueries(CACHE_KEYS.library(bookStatus));
        toast.success('책 등록에 성공했어요.');
        navigate(PAGE_URL.LIBRARY);
      },
    });
  };

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const bookStatusOption = bookStatusList.find(
      (option) => option.typeValue === value
    );
    if (bookStatusOption) {
      setBookStatus(bookStatusOption.typeValue);
      setReadStartDate(null);
      setReadEndDate(null);
    }
  };

  const handleChangeCover = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (e.target.files !== null) {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        const imageUrl = await memoService.imageUpload(formData);
        setCover(imageUrl);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <PageTitle title="책 등록 페이지" />
      <Boxcontainer>
        <BookCoverItem src={cover} />
        <BookDetailInfoItem>
          <form onSubmit={handleSubmit}>
            <label htmlFor="cover">책 이미지</label>
            <input
              id="cover"
              type="file"
              accept="image/*"
              onChange={handleChangeCover}
            />
            <label htmlFor="title">책 제목</label>
            <input
              id="title"
              name="title"
              type="text"
              value={postBookInfoData.title}
              onChange={handleChangeBasicBookInfoData}
            />
            <label htmlFor="author">저자</label>
            <input
              id="author"
              name="author"
              type="text"
              value={postBookInfoData.author}
              onChange={handleChangeBasicBookInfoData}
            />
            <label htmlFor="publisher">출판사</label>
            <input
              id="publisher"
              name="publisher"
              type="text"
              value={postBookInfoData.publisher}
              onChange={handleChangeBasicBookInfoData}
            />
            <label htmlFor="itemPage">전체 페이지</label>
            <input
              id="itemPage"
              name="itemPage"
              type="number"
              value={postBookInfoData.itemPage}
              onChange={handleChangeBasicBookInfoData}
            />
            <label htmlFor="currentPage">현재 페이지</label>
            <input
              id="currentPage"
              type="number"
              value={postBookInfoData.currentPage}
              onChange={handleChangeNumber}
            />
            <label htmlFor="bookStatus">읽기 상태</label>
            <select
              id="bookStatus"
              onChange={handleChangeSelect}
              value={bookStatus}
            >
              {bookStatusList.map((item, idx) => (
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
