import {
  BookCoverItem,
  BookDetailInfoItem,
  Boxcontainer,
  Button,
  PageTitle,
} from '@components/common';
import React, { useState } from 'react';
import { SearchBookInfo } from '../../types/basic';

type Props = {
  bookInfoData: SearchBookInfo;
};

function PostBook({ bookInfoData }: Props) {
  const { cover, title, author, publisher, itemPage } = bookInfoData;
  const [postBookInfoData, setPostBookInfoData] = useState({
    cover,
    title,
    author,
    publisher,
    itemPage,
  });
  const handleChangePostBookInfoData = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, name } = e.target;
    setPostBookInfoData({ ...postBookInfoData, [name]: value });
  };

  const [bookStatus, setBookStatus] =
    useState<string>('📖 읽기 상태를 선택해주세요');

  const [readStartDate, setReadStartDate] = useState<string>('');
  const [readEndDate, setReadEndDate] = useState<string>('');

  const selectList = [
    { typeValue: 'YET', typeText: '읽고 싶은 책' },
    { typeValue: 'ING', typeText: '읽고 있는 책' },
    { typeValue: 'DONE', typeText: '다 읽은 책' },
  ];

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBookStatus(e.target.value);
  };

  return (
    <>
      <PageTitle title="등록" />
      <Boxcontainer title={postBookInfoData.title}>
        <BookCoverItem src={postBookInfoData.cover} />
        <BookDetailInfoItem>
          <form>
            <label htmlFor="author">저자</label>
            <input
              id="author"
              name="author"
              type="text"
              value={postBookInfoData.author}
              onChange={handleChangePostBookInfoData}
            />
            <label htmlFor="publisher">출판사</label>
            <input
              id="publisher"
              name="publisher"
              type="text"
              value={postBookInfoData.publisher}
              onChange={handleChangePostBookInfoData}
            />
            <label htmlFor="itemPage">전체 페이지</label>
            <input
              id="itemPage"
              name="itemPage"
              type="number"
              value={postBookInfoData.itemPage || ''}
              onChange={handleChangePostBookInfoData}
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
                  value={readStartDate}
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
            <Button size="small" styleType="solidPositive">
              등록하기
            </Button>
          </form>
        </BookDetailInfoItem>
      </Boxcontainer>
    </>
  );
}

export default PostBook;
