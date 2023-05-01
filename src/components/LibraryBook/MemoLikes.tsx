import styled from 'styled-components';
import { FcLikePlaceholder, FcLike } from 'react-icons/fc';
import Badge from '@components/common/Badge';
import type { LikeMemoFn, LikeMyMemoFn } from './hooks/useMemoLike';

type BaisicProps = {
  likesCount: number;
  memoLikeDone: boolean;
  isMymemo: boolean;
};

type MyMemoLikeProps = {
  isMymemo: true;
  likeMemo: LikeMyMemoFn;
  unlikeMemo: LikeMyMemoFn;
  memoId: number;
} & BaisicProps;

type MemberMemoLikeProps = {
  isMymemo: false;
  likeMemo: LikeMemoFn;
  unlikeMemo: LikeMemoFn;
  memoId: number;
  memberId: number;
  bookId: number;
} & BaisicProps;

type Props = MyMemoLikeProps | MemberMemoLikeProps;

export default function MemoLikes(props: Props) {
  const { likesCount, memoLikeDone, isMymemo, memoId, likeMemo, unlikeMemo } =
    props;
  const handleMemoLike = () => {
    if (isMymemo) {
      likeMemo(memoId);
    } else {
      const { memberId, bookId } = props;
      likeMemo(memoId, memberId, bookId);
    }
  };

  const handleMemoUnlike = () => {
    if (isMymemo) {
      unlikeMemo(memoId);
    } else {
      const { memberId, bookId } = props;
      unlikeMemo(memoId, memberId, bookId);
    }
  };

  return (
    <Wrapper onClick={memoLikeDone ? handleMemoUnlike : handleMemoLike}>
      <Badge>
        {memoLikeDone ? <FcLike /> : <FcLikePlaceholder />} {likesCount}
      </Badge>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  cursor: pointer;
`;
