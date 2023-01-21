import { SearchBookInfo } from '@projects/types/basic';
import styled from 'styled-components';

type Props = {
  bookInfo: Pick<SearchBookInfo, 'title' | 'author'>;
};

function BookInfoItem({ bookInfo }: Props) {
  return (
    <Wrapper>
      <div>{bookInfo.title}</div>
      <div>{bookInfo.author}</div>
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

const SBookContentKeyword = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 1rem;
`;
