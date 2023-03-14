import { PageTitle } from '@components/common';
import MemoList from '@components/LibraryBook/MemoList';

export default function LibraryBook() {
  return (
    <>
      <PageTitle title="책 상세 페이지" />
      <MemoList />
    </>
  );
}
