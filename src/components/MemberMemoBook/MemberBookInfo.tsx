import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import BookTitle from '@components/common/BookTitle';
import { BookCoverItem } from '@components/common';
import useMemberMemoBook from './hook/useMemberMemoBook';

export default function MemberBookInfo() {
  const { memberId, bookId } = useParams();
  const { bookInfo } = useMemberMemoBook({
    memberId: Number(memberId),
    bookId: Number(bookId),
  });
  return (
    <Wrapper>
      <BookCoverItem src={bookInfo.cover} />
      <div>
        <BookTitle title={bookInfo.title} />
        <InfoText>{bookInfo.author}</InfoText>
        <InfoText>{bookInfo.publisher}</InfoText>
        <InfoText>전체 {bookInfo.itemPage}쪽</InfoText>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  align-items: flex-start;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray03};
  margin-bottom: 1rem;
`;

const InfoText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.black};
  margin-top: 0.5rem;
`;
