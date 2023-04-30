import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import useBookDetail from '@components/LibraryBook/hooks/useBookDetail';
import { Button } from '@components/common';
import BookTitle from '@components/common/BookTitle';

export default function BookInfo() {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const { title } = useBookDetail({ bookId: Number(bookId) });

  const handleMemoEdit = () => {
    navigate(`/book/library/${bookId}`);
  };
  return (
    <Wrapper>
      <div>
        <BookTitle title={title} />
      </div>
      <Button styleType="solidPositive" size="small" onClick={handleMemoEdit}>
        메모 작성하러 가기
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
  align-items: flex-start;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray03};
  margin-bottom: 1rem;
`;
