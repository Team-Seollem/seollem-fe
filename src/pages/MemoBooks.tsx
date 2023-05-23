import { PageTitle } from '@components/common';
import MemoBookList from '@components/MemoBooks/MemoBookList';

export default function MemoBooks() {
  return (
    <>
      <PageTitle title="나만의 작은 책" />
      <MemoBookList />
    </>
  );
}
