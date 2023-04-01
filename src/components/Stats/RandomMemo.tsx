import MemoBookPage from '@components/MemoBookDetail/MemoBookPage';
import styled from 'styled-components';
import useRandomMemo from './hooks/useRandomMemo';

export default function RandomMemo() {
  const randomMemo = useRandomMemo();
  return (
    <>
      <Title>랜덤 메모</Title>
      <MemoBookPage memo={randomMemo} memoBookBg="WHITE" />
    </>
  );
}

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.md};
  margin-bottom: 1rem;
`;
