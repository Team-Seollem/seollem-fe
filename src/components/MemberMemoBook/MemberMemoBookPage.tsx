/* eslint-disable react/no-danger */
import MemoLikes from '@components/LibraryBook/MemoLikes';
import useMemoLike from '@components/LibraryBook/hooks/useMemoLike';
import { MEMO_TYPES } from '@constants';
import { MemberMemo } from '@projects/types/library';
import DOMPurify from 'dompurify';
import styled from 'styled-components';

type Props = {
  memo: MemberMemo;
  memberId: number;
  bookId: number;
};

export default function MemberMemoBookPage({ memo, memberId, bookId }: Props) {
  const { likeMemberMemo, unlikeMemberMemo } = useMemoLike();
  return (
    <Wrapper>
      <MemoInfo>
        <MemoPage>{`p. ${memo.memoBookPage}`}</MemoPage>
        <MemoType>{MEMO_TYPES[memo.memoType].typeText}</MemoType>
      </MemoInfo>
      <MemoContent>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(memo.memoContent),
          }}
        />
      </MemoContent>
      <BadgeContainer>
        <MemoLikes
          memoLikeDone={memo.memoLikeDone}
          likesCount={memo.memoLikesCount}
          isMymemo={false}
          memoId={memo.memoId}
          memberId={memberId}
          bookId={bookId}
          likeMemo={likeMemberMemo}
          unlikeMemo={unlikeMemberMemo}
        />
      </BadgeContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.color.gray02};
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  z-index: 0;
`;

const MemoInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

const MemoPage = styled.div`
  border-radius: 1rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.color.gray01};
  background-color: ${({ theme }) => theme.color.primary_light};
  font-weight: bold;
`;

const MemoType = styled.div`
  padding: 0.5rem 1rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  background-color: ${({ theme }) => theme.color.primary_light};
  color: ${({ theme }) => theme.color.gray01};
  font-weight: bold;
`;

const MemoContent = styled.div`
  font-family: 'RIDIBatang';
  padding: 1rem 0;
  width: 100%;
  line-height: 150%;
  font-size: ${({ theme }) => theme.fontSize.base};
  overflow: hidden;
  min-height: 20rem;
  & img {
    max-width: 100%;
    height: auto;
  }
`;

const BadgeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
