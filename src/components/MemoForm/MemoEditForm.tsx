import { useParams } from 'react-router-dom';
import {
  MemoTypeSelect,
  MemoAuthoritySelect,
  MemoPageInput,
  MemoContentEditor,
  useMemoState,
  useEditMemo,
} from '@components/MemoForm';
import { useBookDetail } from '@components/LibraryBook/hook/useBookDetail';
import * as S from './styles';

export default function MemoEditForm() {
  const { bookId, memoId } = useParams();
  const { memosList } = useBookDetail({ bookId: Number(bookId) });
  const prevMemo = memosList.find((memo) => memo.memoId === Number(memoId)) || {
    memoAuthority: 'PRIVATE',
    memoBookPage: 0,
    memoType: 'BOOK_CONTENT',
    memoContent: '',
  };

  const editMemoMutation = useEditMemo();
  const {
    memo,
    handleAuthorityChange,
    handlePageChange,
    handleTypeChange,
    handleContentChange,
  } = useMemoState({
    memoAuthority: prevMemo.memoAuthority,
    memoBookPage: prevMemo.memoBookPage,
    memoType: prevMemo.memoType,
    memoContent: prevMemo.memoContent,
  });

  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!memo.memoContent || !bookId || !memoId) {
      return;
    }

    editMemoMutation({
      bookId: Number(bookId),
      memoId: Number(memoId),
      memoData: memo,
    });
  };

  return (
    <S.Form onSubmit={handleSumbit}>
      {/* <MemoAuthoritySelect
        authority={memo.memoAuthority}
        onChange={handleAuthorityChange}
      /> */}
      <MemoPageInput page={memo.memoBookPage} onChange={handlePageChange} />
      <MemoTypeSelect type={memo.memoType} onChange={handleTypeChange} />
      <MemoContentEditor
        content={memo.memoContent}
        onChange={handleContentChange}
      />
      <S.FormButton type="submit" styleType="solidPositive" size="large">
        수정하기
      </S.FormButton>
    </S.Form>
  );
}
