import { useParams } from 'react-router-dom';
import {
  MemoTypeSelect,
  MemoAuthoritySelect,
  MemoPageInput,
  MemoContentEditor,
  useCreateMemo,
  useMemoState,
} from '@components/MemoForm';
import * as S from './styles';

export default function MemoCreateForm() {
  const { bookId } = useParams();

  const createMemoMutation = useCreateMemo();
  const {
    memo,
    handleAuthorityChange,
    handlePageChange,
    handleTypeChange,
    handleContentChange,
  } = useMemoState({
    memoAuthority: 'PRIVATE',
    memoBookPage: 0,
    memoType: 'BOOK_CONTENT',
    memoContent: '',
  });

  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!memo.memoContent || !bookId) {
      return;
    }

    createMemoMutation({
      bookId: Number(bookId),
      memoData: memo,
    });
  };

  return (
    <S.Form onSubmit={handleSumbit}>
      <MemoAuthoritySelect
        authority={memo.memoAuthority}
        onChange={handleAuthorityChange}
      />
      <MemoPageInput page={memo.memoBookPage} onChange={handlePageChange} />
      <MemoTypeSelect type={memo.memoType} onChange={handleTypeChange} />
      <MemoContentEditor
        content={memo.memoContent}
        onChange={handleContentChange}
      />
      <S.FormButton
        type="submit"
        styleType={!memo.memoContent ? 'outlineDisabled' : 'solidPositive'}
        size="large"
      >
        저장하기
      </S.FormButton>
    </S.Form>
  );
}
