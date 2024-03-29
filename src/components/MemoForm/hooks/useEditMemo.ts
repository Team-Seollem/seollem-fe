import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { CACHE_KEYS } from '@constants';
import { memoService } from '@apis/index';
import type { MemoEditRequest, MemoAuthority } from '@projects/types/library';

export default function useEditMemo() {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutate: editMemoMutation, isLoading } = useMutation(
    async (variables: {
      bookId: number;
      memoId: number;
      memoData: MemoEditRequest;
    }) => {
      const { memoId, memoData } = variables;
      const data = await memoService.editMemo(memoId, memoData);
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(CACHE_KEYS.memoBooks);
      },
    }
  );

  const toggleMemoAuthoryty = (
    bookId: number,
    memoId: number,
    memoAuthority: MemoAuthority
  ) => {
    editMemoMutation({ bookId, memoId, memoData: { memoAuthority } });
  };

  const editMemo = (
    bookId: number,
    memoId: number,
    memoData: MemoEditRequest
  ) => {
    editMemoMutation(
      { bookId, memoId, memoData },
      {
        onSuccess: () => {
          navigate(`/book/library/${bookId}`);
        },
      }
    );
  };

  return { editMemo, toggleMemoAuthoryty, isLoading };
}
