import { useMutation, useQueryClient } from '@tanstack/react-query';
import { memoService } from '@apis/index';
import { CACHE_KEYS } from '@constants';
import useMyProfile from '@components/MyProfile/hook/useMyProfile';

type Variables = {
  memoId: number;
  memberId: number;
  bookId?: number;
  isMyMemo: boolean;
};

export type LikeMyMemoFn = (memoId: number) => void;
export type LikeMemoFn = (
  memoId: number,
  memberId: number,
  bookId: number
) => void;

export default function useMemoLike() {
  const queryClient = useQueryClient();
  const { data: myProfile } = useMyProfile();
  const { mutate: memoLikeMutation } = useMutation(
    async (variables: Variables) => {
      const { memoId } = variables;
      const data = await memoService.addMemoLike(memoId);
      return data;
    },
    {
      onSuccess: (data, variables) => {
        const { memberId, isMyMemo, bookId } = variables;
        const cachekey =
          !isMyMemo && bookId
            ? CACHE_KEYS.memberMemoBook(memberId, bookId)
            : CACHE_KEYS.memoBooks;
        queryClient.invalidateQueries(cachekey);
      },
    }
  );

  const { mutate: memoUnlikeMutation } = useMutation(
    async (variables: Variables) => {
      const { memoId } = variables;
      const data = await memoService.deleteMemoLike(memoId);
      return data;
    },
    {
      onSuccess: (data, variables) => {
        const { memberId, isMyMemo, bookId } = variables;
        const cachekey =
          !isMyMemo && bookId
            ? CACHE_KEYS.memberMemoBook(memberId, bookId)
            : CACHE_KEYS.memoBooks;
        queryClient.invalidateQueries(cachekey);
      },
    }
  );

  const likeMyMemo: LikeMyMemoFn = (memoId: number) => {
    memoLikeMutation({
      memoId,
      memberId: myProfile.memberId,
      isMyMemo: true,
    });
  };

  const likeMemberMemo: LikeMemoFn = (
    memoId: number,
    memberId: number,
    bookId: number
  ) => {
    memoLikeMutation({
      memoId,
      memberId,
      isMyMemo: false,
      bookId,
    });
  };

  const unlikeMyMemo: LikeMyMemoFn = (memoId: number) => {
    memoUnlikeMutation({
      memoId,
      memberId: myProfile.memberId,
      isMyMemo: true,
    });
  };

  const unlikeMemberMemo: LikeMemoFn = (
    memoId: number,
    memberId: number,
    bookId: number
  ) => {
    memoUnlikeMutation({
      memoId,
      memberId,
      isMyMemo: false,
      bookId,
    });
  };

  return { likeMyMemo, likeMemberMemo, unlikeMyMemo, unlikeMemberMemo };
}
