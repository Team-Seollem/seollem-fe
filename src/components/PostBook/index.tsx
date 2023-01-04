import { SBookContainer, SFormWrapper } from '@components/DetailBookInfo';
import React, { useState } from 'react';
import { BookInfoProps } from '../../types/basic';

function PostBook({ bookInfoData }: BookInfoProps) {
  const [postBookInfoData, setPostBookInfoData] = useState({
    cover: bookInfoData.cover,
    title: bookInfoData.title,
    author: bookInfoData.author,
    publisher: bookInfoData.publisher,
    itemPage: bookInfoData.itemPage,
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
    { typeValue: '', typeText: '📖 읽기 상태를 선택해주세요' },
    { typeValue: 'YET', typeText: '읽고 싶은 책' },
    { typeValue: 'ING', typeText: '읽고 있는 책' },
    { typeValue: 'DONE', typeText: '다 읽은 책' },
  ];

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBookStatus(e.target.value);
  };

  return (
    <>
      <div>등록</div>
      <SBookContainer>
        <form>
          <img src={postBookInfoData.cover} alt="도서 이미지" />
          <SFormWrapper>
            <label htmlFor="title">책 제목</label>
            <input
              id="title"
              name="title"
              type="text"
              value={postBookInfoData.title}
              onChange={handleChangePostBookInfoData}
            />
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
          </SFormWrapper>
          {bookStatus === 'ING' ? (
            <SFormWrapper>
              <label htmlFor="readStartDate">읽기 시작한 날 </label>
              <input
                id="readStartDate"
                type="datetime-local"
                value={readStartDate}
                onChange={(e) => setReadStartDate(`${e.target.value}:00`)}
              />
            </SFormWrapper>
          ) : null}
          {bookStatus === 'DONE' ? (
            <>
              <SFormWrapper>
                <label htmlFor="readStartDate">읽기 시작한 날</label>
                <input
                  id="readStartDate"
                  type="datetime-local"
                  onChange={(e) => setReadStartDate(`${e.target.value}:00`)}
                />
              </SFormWrapper>
              <SFormWrapper>
                <label htmlFor="readEndDate">다 읽은 날</label>
                <input
                  id="readEndDate"
                  type="datetime-local"
                  onChange={(e) => setReadEndDate(`${e.target.value}:00`)}
                />
              </SFormWrapper>
            </>
          ) : null}

          <button type="button">등록하기</button>
        </form>
      </SBookContainer>
    </>
  );
}

export default PostBook;
