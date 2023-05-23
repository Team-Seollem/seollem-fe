import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { CACHE_KEYS } from '@constants';
import { memoService } from '@apis/index';
import type { MemoRequest } from '@projects/types/library';

export default function useCreateMemo() {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    async (variables: { bookId: number; memoData: MemoRequest }) => {
      const { bookId, memoData } = variables;
      const data = await memoService.createMemo(bookId, memoData);
      return data;
    },
    {
      onSuccess: (data, variables) => {
        const { bookId } = variables;
        queryClient.invalidateQueries(CACHE_KEYS.bookDetail(bookId));
        queryClient.invalidateQueries(CACHE_KEYS.memoBooks);
        navigate(`/book/library/${bookId}`);
      },
    }
  );

  return mutate;
}
