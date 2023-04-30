import { useParams } from 'react-router-dom';
import useMemberMemoBook from './hook/useMemberMemoBook';

export default function MemberMemoList() {
  const { memberId, bookId } = useParams();

  const { memoList } = useMemberMemoBook({
    memberId: Number(memberId),
    bookId: Number(bookId),
  });
  return <div>hi</div>;
}
