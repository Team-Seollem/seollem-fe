import { useState } from 'react';
import { Boxcontainer, PageTitle } from '@components/common';
import type { MemoAuthority, MemoType } from '@projects/types/library';
import MemoTypeSelect from '@components/MemoForm/MemoTypeSelect';
import MemoAuthoritySelect from '@components/MemoForm/MemoAuthoritySelect';
import MemoPageInput from '@components/MemoForm/MemoPageInput';
import styled from 'styled-components';
import MemoContentEditor from '@components/MemoForm/MemoContentEditor';
import Button from '@components/common/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useCreateMemo } from '../components/MemoForm/hook/useCreateMemo';

export default function MemoForm() {
  const { bookId } = useParams();
  const createMemoMutation = useCreateMemo();
  const navigate = useNavigate();

  const [memoAuthority, setMemoAuthority] = useState<MemoAuthority>('PRIVATE');
  const [memoBookPage, setMemoBookPage] = useState<number>(0);
  const [memoType, setMemoType] = useState<MemoType>('BOOK_CONTENT');
  const [memoContent, setMemoContent] = useState('');
  const handleAuthorityChange = (newAuthority: MemoAuthority) => {
    setMemoAuthority(newAuthority);
  };
  const handlePageChanage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, Math.min(400, Number(e.target.value)));
    setMemoBookPage(value);
  };
  const handleTypeChange = (newType: MemoType) => {
    setMemoType(newType);
  };

  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!memoContent) {
      return;
    }
    if (!bookId) {
      return;
    }
    createMemoMutation({
      bookId: Number(bookId),
      memoData: {
        memoAuthority,
        memoBookPage,
        memoType,
        memoContent,
      },
    });
    navigate(`/book/library/${bookId}`);
  };

  return (
    <>
      <PageTitle title="메모 등록 페이지" path={`/book/library/${bookId}`} />
      <Boxcontainer>
        <SForm onSubmit={handleSumbit}>
          <MemoAuthoritySelect
            authority={memoAuthority}
            onChange={handleAuthorityChange}
          />
          <MemoPageInput page={memoBookPage} onChange={handlePageChanage} />
          <MemoTypeSelect type={memoType} onChange={handleTypeChange} />
          <MemoContentEditor content={memoContent} onChange={setMemoContent} />
          <SButton
            type="submit"
            styleType={!memoContent ? 'outlineDisabled' : 'solidPositive'}
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
