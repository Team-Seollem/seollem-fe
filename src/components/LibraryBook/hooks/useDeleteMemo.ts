import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CACHE_KEYS } from '@constants';
import { memoService } from '@apis/index';

export default function useDeleteMemo() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    async (variables: { memoId: number; bookId: number }) => {
      const { memoId } = variables;
      const data = await memoService.removeMemo(memoId);
      return data;
    },
    {
      onSuccess: (data, variables) => {
        const { bookId } = variables;
        queryClient.invalidateQueries(CACHE_KEYS.bookDetail(bookId));
        queryClient.invalidateQueries(CACHE_KEYS.memoBooks);
      },
    }
  );

  return mutate;
}
