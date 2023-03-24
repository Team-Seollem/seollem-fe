import { PageTitle } from '@components/common';
import { PAGE_URL } from '@constants';

export default function MemoBookDetail() {
  return (
    <>
      <PageTitle title="나만의 작은책 보기" path={PAGE_URL.MEMO_BOOKS} />
      <div>memobook</div>
    </>
  );
}
