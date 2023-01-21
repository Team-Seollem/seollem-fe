import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { SearchBookInfo } from '@projects/types/basic';

type BookInfoProps = {
  bookInfoData: SearchBookInfo;
};

function DetailBookInfo({ bookInfoData }: BookInfoProps) {
  const navigate = useNavigate();
  const { cover, title, author, publisher, itemPage } = bookInfoData;
  const handleClick = () =>
    navigate(`/post/book/${title}`, {
      state: {
        bookInfoData,
      },
    });
  return (
    <SBookContainer>
      <form>
        <img src={cover} alt="도서 이미지" />
        <SFormWrapper>
          <label htmlFor="title">책 제목</label>
          <input id="title" type="text" value={title} readOnly />
          <label htmlFor="author">저자</label>
          <input id="author" type="text" value={author} readOnly />
          <label htmlFor="publisher">출판사</label>
          <input id="publisher" type="text" value={publisher} readOnly />
          <label htmlFor="itemPage">전체 페이지</label>
          <input id="itemPage" type="number" value={itemPage || ''} readOnly />

          <button type="button" onClick={handleClick}>
            등록하러가기
          </button>
        </SFormWrapper>
      </form>
    </SBookContainer>
  );
}

export default DetailBookInfo;

export const SBookContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;
  border-radius: 0.25rem;
  box-shadow: 0rem 0rem 0.25rem 0rem rgba(0 0 0 / 20%);
`;
export const SFormWrapper = styled.div`
  width: 100%;
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 300;
    font-size: 1.2rem;
    color: ${(props) => props.theme.color.gray01};
  }
  input,
  select {
    margin-bottom: 0.5rem;
    padding: 0.5rem 0.75rem;
    border: 0.1rem solid ${(props) => props.theme.color.skyblue02};
    border-radius: 0.25rem;
    outline: none;
    color: ${(props) => props.theme.color.gray01};
    font-family: 'Pretendard-Regular';
    width: 100%;
  }
`;
