import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { TbPlus } from 'react-icons/tb';
import { Button } from '@components/common';
import useMemobookDetail from '@components/MemoBookDetail/hooks/useMemobookDetail';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import MemoItem from './MemoItem';

export default function MemoList() {
  const { bookId } = useParams();
  const navigate = useNavigate();

  const { memoBooks, isLoading, hasNextPage, fetchNextPage } =
    useMemobookDetail({
      bookId: Number(bookId),
      memoType: 'ALL',
      memoAuthority: 'ALL',
    });

  const { ref, isIntersect } = useIntersectionObserver({ threshold: 0.2 });

  const handleAddMemo = () => {
    navigate(`/book/library/${bookId}/memo`);
  };

  useEffect(() => {
    if (hasNextPage && isIntersect) {
      fetchNextPage();
    }
  }, [hasNextPage, isIntersect, fetchNextPage]);

  return (
    <Section>
      <BoxTitle>
        {memoBooks.length ? (
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
        {memoBooks.map((memo) => (
          <MemoItem key={memo.memoId} memo={memo} bookId={Number(bookId)} />
        ))}
        {!isLoading && hasNextPage && <div ref={ref} />}
      </List>
    </Section>
  );
}

const Section = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
`;

const BoxTitle = styled.div`
  width: 100%;
  margin-top: 0.6rem;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.md};
  white-space: nowrap;
`;

const Svg = styled(TbPlus)`
  margin-right: 0.3rem;
`;

const List = styled.ul`
  background-color: ${({ theme }) => theme.color.white};
  margin-top: 1rem;
`;
