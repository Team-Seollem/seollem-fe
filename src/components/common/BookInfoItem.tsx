import { SearchBookInfo } from '@projects/types/basic';
import styled from 'styled-components';

type Props = {
  bookInfoData: Pick<SearchBookInfo, 'title' | 'author'>;
};

// 책 검색 페이지 및 추천 페이지 책 정보 UI 컴포넌트
function BookInfoItem({ bookInfoData }: Props) {
  const { title, author } = bookInfoData;
  return (
    <Wrapper>
      <div>{title}</div>
      <div>{author}</div>
    </Wrapper>
  );
}

export default BookInfoItem;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 1rem;
  padding: 0.3rem;
`;
