/* eslint-disable react/no-danger */
import styled from 'styled-components';
import DOMPurify from 'dompurify';

import { BsTrashFill } from 'react-icons/bs';
import type { MemoBookDetail } from '@projects/types/library';
import { MEMO_TYPES } from '@constants';
import { getLatestUpdateDate } from '@utils';
import { Button } from '@components/common';

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
    <Wrapper onClick={() => handleEditMemo(memo.memoId)}>
      <InfoContainer>
        <PageInfo>{`p. ${memo.memoBookPage}`}</PageInfo>
        <Button styleType="ghost" size="small">
          <Svg
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteMemo(memo.memoId);
            }}
          />
        </Button>
      </InfoContainer>
      <InfoContainer>
        <p>{getLatestUpdateDate(memo.createdAt, memo.updatedAt)}</p>
        <Type>{MEMO_TYPES[memo.memoType].typeText}</Type>
      </InfoContainer>

      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(memo.memoContent),
        }}
      />
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
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.gray04};
  }
`;
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
`;

const Svg = styled(BsTrashFill)`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.color.gray01};
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
