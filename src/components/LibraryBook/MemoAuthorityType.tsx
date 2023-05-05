import { useParams } from 'react-router-dom';
import Badge from '@components/common/Badge';
import { MEMO_AUTHORITY } from '@constants';
import type { MemoAuthority } from '@projects/types/library';
import { useEditMemo } from '@components/MemoForm';

type Props = {
  authority: MemoAuthority;
  memoId: number;
};

export default function MemoAuthorityType({ authority, memoId }: Props) {
  const { bookId } = useParams();

  const { toggleMemoAuthoryty, isLoading } = useEditMemo();

  const handelToggleAuthority = () => {
    const memoAuthority = authority === 'PUBLIC' ? 'PRIVATE' : 'PUBLIC';
    toggleMemoAuthoryty(Number(bookId), memoId, memoAuthority);
  };

  return (
    <Badge onClick={handelToggleAuthority} disabled={isLoading}>
      {MEMO_AUTHORITY[authority].typeText}
    </Badge>
  );
}
