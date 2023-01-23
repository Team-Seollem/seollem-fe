import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { SearchBookInfo } from '@projects/types/basic';
import {
  BookCoverItem,
  BookDetailInfoItem,
  Boxcontainer,
  Button,
  PageTitle,
} from '@components/common';

type BookInfoProps = {
  bookInfoData: SearchBookInfo;
};

function DetailBookInfo({ bookInfoData }: BookInfoProps) {
  const navigate = useNavigate();
  const { cover, title, author, publisher, itemPage } = bookInfoData;
  const onHandleClick = () =>
    navigate(`/book/register/${title}`, {
      state: {
        bookInfoData,
      },
    });
  return (
    <>
      <PageTitle title="책 정보 상세" />
      <Boxcontainer title={title}>
        <BookCoverItem src={cover} />
        <BookDetailInfoItem>
          <label htmlFor="author">저자</label>
          <input id="author" type="text" value={author} readOnly />
          <label htmlFor="publisher">출판사</label>
          <input id="publisher" type="text" value={publisher} readOnly />
          <label htmlFor="itemPage">전체 페이지</label>
          <input id="itemPage" type="number" value={itemPage || ''} readOnly />
          <Button
            onClick={onHandleClick}
            size="small"
            styleType="solidPositive"
          >
            등록하러가기
          </Button>
        </BookDetailInfoItem>
      </Boxcontainer>
    </>
  );
}

export default DetailBookInfo;
