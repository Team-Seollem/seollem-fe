import { useParams } from 'react-router-dom';
import { Boxcontainer, PageTitle } from '@components/common';
import MemoCreateForm from '@components/MemoForm/MemoCreateForm';
import MemoEditForm from '@components/MemoForm/MemoEditForm';

export default function MemoForm() {
  const { bookId, memoId } = useParams();

  return (
    <>
      <PageTitle
        title={!memoId ? '메모 등록 페이지' : '메모 수정 페이지'}
        path={`/book/library/${bookId}`}
      />
      <Boxcontainer>
        {!memoId && <MemoCreateForm />}
        {memoId && <MemoEditForm />}
      </Boxcontainer>
    </>
  );
}
