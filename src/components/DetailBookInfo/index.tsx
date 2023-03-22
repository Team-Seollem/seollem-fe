import { useNavigate } from 'react-router-dom';
import { SearchBookInfo } from '@projects/types/basic';
import {
  BookCoverItem,
  BookDetailInfoItem,
  Boxcontainer,
  Button,
  PageTitle,
} from '@components/common';
import React from 'react';

type Props = {
  bookInfoData: SearchBookInfo;
};

function DetailBookInfo({ bookInfoData }: Props) {
  const navigate = useNavigate();
  const { cover, title, author, publisher, itemPage } = bookInfoData;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    navigate(`/book/register/${title}`, {
      state: {
        bookInfoData,
      },
    });
    e.preventDefault();
  };

  return (
    <>
      <PageTitle title="책 정보 상세" />
      <Boxcontainer title={title}>
        <BookCoverItem src={cover} />
        <BookDetailInfoItem>
          <form onSubmit={handleSubmit}>
            <label htmlFor="author">저자</label>
            <input id="author" type="text" value={author} readOnly />
            <label htmlFor="publisher">출판사</label>
            <input id="publisher" type="text" value={publisher} readOnly />
            <label htmlFor="itemPage">전체 페이지</label>
            <input
              id="itemPage"
              type="number"
              value={itemPage || ''}
              readOnly
            />
            <Button size="small" styleType="solidPositive" type="submit">
              등록하러가기
            </Button>
          </form>
        </BookDetailInfoItem>
      </Boxcontainer>
    </>
  );
}

export default DetailBookInfo;
