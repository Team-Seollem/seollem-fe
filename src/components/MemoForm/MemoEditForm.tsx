import { useParams } from 'react-router-dom';
import {
  MemoTypeSelect,
  MemoPageInput,
  MemoContentEditor,
  useMemoState,
  useEditMemo,
} from '@components/MemoForm';
import { memoTypeList } from '@constants';
import useMemobookDetail from '@components/MemoBookDetail/hooks/useMemobookDetail';
import * as S from './styles';

export default function MemoEditForm() {
  const { bookId, memoId } = useParams();
  const { memoBooks } = useMemobookDetail({
    bookId: Number(bookId),
    memoType: 'ALL',
    memoAuthority: 'ALL',
  });

  const prevMemo = memoBooks.find((memo) => memo.memoId === Number(memoId)) || {
    memoAuthority: 'PRIVATE',
    memoBookPage: 0,
    memoType: 'BOOK_CONTENT',
    memoContent: '',
  };
  const { editMemo } = useEditMemo();

  const { memo, handlePageChange, handleTypeChange, handleContentChange } =
    useMemoState({
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

    editMemo(Number(bookId), Number(memoId), memo);
  };

  return (
    <S.Form onSubmit={handleSumbit}>
      <MemoPageInput page={memo.memoBookPage} onChange={handlePageChange} />
      <MemoTypeSelect
        typeList={memoTypeList}
        type={memo.memoType}
        onChange={handleTypeChange}
      />
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
