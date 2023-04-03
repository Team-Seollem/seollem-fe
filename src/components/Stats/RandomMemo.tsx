import MemoBookPage from '@components/MemoBookDetail/MemoBookPage';
import Title from '@components/common/Title';
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
