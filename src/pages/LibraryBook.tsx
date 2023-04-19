import { PageTitle } from '@components/common';
import BookDetail from '@components/LibraryBook/BookDetail';
import MemoList from '@components/LibraryBook/MemoList';
import { PAGE_URL } from '@constants';

export default function LibraryBook() {
  return (
    <>
      <PageTitle title="책 상세 페이지" path={PAGE_URL.LIBRARY} />
      <BookDetail />
      <MemoList />
    </>
  );
}
