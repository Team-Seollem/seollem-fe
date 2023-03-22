import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { TbPlus } from 'react-icons/tb';
import { useBookDetail } from './hooks/useBookDetail';
import Button from '../common/Button';
import MemoItem from './MemoItem';
import useDeleteMemo from './hooks/useDeleteMemo';

export default function MemoList() {
  const { bookId } = useParams();
  const navigate = useNavigate();

  const { memosList } = useBookDetail({ bookId: Number(bookId) });
  const deleteMemo = useDeleteMemo();

  const handleAddMemo = () => {
    navigate(`/book/library/${bookId}/memo`);
  };

  const handleEditMemo = (memoId: number) => {
    navigate(`/book/library/${bookId}/memo/${memoId}`);
  };

  const handleDeleteMemo = (memoId: number) => {
    if (!bookId) return;
    deleteMemo({ bookId: Number(bookId), memoId });
  };

  return (
    <Section>
      <BoxTitle>
        {memosList.length ? (
          <Title>내가 작성한 메모</Title>
        ) : (
          <Title>📝 첫번째 메모 남기기</Title>
        )}
        <Button
          styleType="solidPositive"
          size="small"
          type="button"
          onClick={handleAddMemo}
        >
          <Svg />
          메모 추가
        </Button>
      </BoxTitle>
      <List>
        {memosList.map((memo) => (
          <MemoItem
            key={memo.memoId}
            memo={memo}
            handleEditMemo={handleEditMemo}
            handleDeleteMemo={handleDeleteMemo}
          />
        ))}
      </List>
    </Section>
  );
}

const Section = styled.div`
  margin-bottom: 3rem;
`;

const BoxTitle = styled.div`
  width: 100%;
  margin-top: 0.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.md};
  margin-left: 1rem;
  white-space: nowrap;
`;

const Svg = styled(TbPlus)`
  margin-right: 0.3rem;
`;

const List = styled.ul`
  background-color: ${({ theme }) => theme.color.white};
  margin-top: 1rem;
`;
