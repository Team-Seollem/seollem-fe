/* eslint-disable react/no-danger */
import styled from 'styled-components';
import DOMPurify from 'dompurify';
import { useNavigate } from 'react-router-dom';
import { FaPen } from 'react-icons/fa';

import { MEMO_TYPES } from '@constants';
import { getLatestUpdateDate } from '@utils';
import type { MemoBookDetail } from '@projects/types/library';
import { Button } from '@components/common';
import MemoAuthorityType from '@components/LibraryBook/MemoAuthorityType';
import DeleteConfirmButton from './DeleteConfirmButton';
import MemoLikes from './MemoLikes';
import useMemoLike from './hooks/useMemoLike';
import useDeleteMemo from './hooks/useDeleteMemo';

type Props = {
  memo: MemoBookDetail;
  bookId: number;
};

export default function MemoItem({ memo, bookId }: Props) {
  const navigate = useNavigate();
  const { likeMyMemo, unlikeMyMemo } = useMemoLike();
  const deleteMemo = useDeleteMemo();

  const handleEditMemo = (memoId: number) => {
    navigate(`/book/library/${bookId}/memo/${memoId}`);
  };

  const handleDeleteMemo = (memoId: number) => {
    if (!bookId) return;
    deleteMemo({ bookId: Number(bookId), memoId });
  };
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
            memoId={memo.memoId}
          />
        </div>
      </InfoContainer>
      <InfoContainer>
        <Date>{getLatestUpdateDate(memo.createdAt, memo.updatedAt)}</Date>
        <Type>{MEMO_TYPES[memo.memoType].typeText}</Type>
      </InfoContainer>
      <MemoContent>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(memo.memoContent),
          }}
        />
      </MemoContent>
      <BadgeContainer>
        <MemoAuthorityType
          authority={memo.memoAuthority}
          memoId={memo.memoId}
        />
        <MemoLikes
          memoLikeDone={memo.memoLikeDone}
          likesCount={memo.memoLikesCount}
          isMymemo
          memoId={memo.memoId}
          likeMemo={likeMyMemo}
          unlikeMemo={unlikeMyMemo}
        />
      </BadgeContainer>
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
  font-size: ${({ theme }) => theme.fontSize.sm};
  padding: 0.5rem 1rem;

  color: ${({ theme }) => theme.color.gray01};
  background-color: ${({ theme }) => theme.color.primary_light};
  font-weight: bold;
`;

const Date = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.gray01};
`;

const Type = styled.div`
  padding: 0.5rem 1rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  background-color: ${({ theme }) => theme.color.primary_light};
  color: ${({ theme }) => theme.color.gray01};
  font-weight: bold;
`;

const MemoContent = styled.div`
  padding: 1rem 0;
  width: 100%;
  line-height: 150%;
  font-size: ${({ theme }) => theme.fontSize.base};
  overflow: hidden;
  & img {
    max-width: 100%;
    height: auto;
  }
`;

const BadgeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;
