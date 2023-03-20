import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { Boxcontainer, PageTitle, Button } from '@components/common';
import {
  MemoTypeSelect,
  MemoAuthoritySelect,
  MemoPageInput,
  MemoContentEditor,
  useCreateMemo,
  useMemoState,
} from '@components/MemoForm';

export default function MemoForm() {
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
    <>
      <PageTitle title="메모 등록 페이지" path={`/book/library/${bookId}`} />
      <Boxcontainer>
        <SForm onSubmit={handleSumbit}>
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
          <SButton
            type="submit"
            styleType={!memo.memoContent ? 'outlineDisabled' : 'solidPositive'}
            size="large"
          >
            저장하기
          </SButton>
        </SForm>
      </Boxcontainer>
    </>
  );
}
const SForm = styled.form`
  width: 100%;
`;

const SButton = styled(Button)`
  font-size: ${({ theme }) => theme.fontSize.base};
  margin-top: 1rem;
`;
