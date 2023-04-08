/* eslint-disable react/no-danger */
import styled from 'styled-components';
import DOMPurify from 'dompurify';

import { FaPen } from 'react-icons/fa';
import { MEMO_TYPES } from '@constants';
import { getLatestUpdateDate } from '@utils';
import type { MemoBookDetail } from '@projects/types/library';
import { Button } from '@components/common';
import MemoAuthorityType from '@components/common/MemoAuthorityType';
import DeleteConfirmButton from './DeleteConfirmButton';

type Props = {
  memo: MemoBookDetail;
  handleEditMemo: (memoId: number) => void;
  handleDeleteMemo: (memoId: number) => void;
};

export default function MemoItem({
  memo,
  handleEditMemo,
  handleDeleteMemo,
}: Props) {
  return (
    <Wrapper>
      <InfoContainer>
        <PageInfo>{`p. ${memo.memoBookPage}`}</PageInfo>
        <div>
          <Button
            styleType="ghost"
            size="small"
            onClick={() => handleEditMemo(memo.memoId)}
          >
            <EditIcon />
          </Button>
          <DeleteConfirmButton
            onConfirm={() => handleDeleteMemo(memo.memoId)}
          />
        </div>
      </InfoContainer>
      <InfoContainer>
        <p>{getLatestUpdateDate(memo.createdAt, memo.updatedAt)}</p>
        <Type>{MEMO_TYPES[memo.memoType].typeText}</Type>
      </InfoContainer>
      <MemoContent>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(memo.memoContent),
          }}
        />
      </MemoContent>
      {/* FIX: memoAuthoryty가 null일때 처리를 위해서 기본값을 임의로 private로 지정함 */}
      <MemoAuthorityType authority={memo.memoAuthority ?? 'PRIVATE'} />
    </Wrapper>
  );
}

const Wrapper = styled.li`
  box-shadow: 0 0 0.25rem 0 rgba(0 0 0 / 20%);
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.color.white};
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.fontSize.base};
  display: flex;
  flex-direction: column;
`;
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
`;

const EditIcon = styled(FaPen)`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.color.gray01};
  cursor: pointer;
`;

const PageInfo = styled.div`
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.skyblue01};
  padding: 0.5rem 1rem;
  text-align: center;
  color: white;
`;
const Type = styled.div`
  padding: 0.5rem 1rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.sm};
  background-color: ${({ theme }) => theme.color.skyblue01};
  color: ${({ theme }) => theme.color.white};
`;

const MemoContent = styled.div`
  padding: 1rem 0;
  width: 100%;
  line-height: 150%;
`;
