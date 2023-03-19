import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CACHE_KEYS } from '@constants';
import { memoService } from '@apis/index';
import type { MemoRequest } from '@projects/types/library';

export default function useEditMemo() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    async (variables: { bookId: number; memoData: MemoRequest }) => {
      const { bookId, memoData } = variables;
      const data = await memoService.editMemo(bookId, memoData);
      return data;
    },
    {
      onSuccess: (data, variables) => {
        const { bookId } = variables;
        queryClient.invalidateQueries(CACHE_KEYS.bookDetail(bookId));
      },
    }
  );
  return mutate;
}
