import { useQuery } from '@tanstack/react-query';
import type { MemoBasic } from '@projects/types/library';
import { memoService } from '@apis/index';
import { CACHE_KEYS } from '@constants';

export default function useRandomMemo() {
  const fallback: MemoBasic = {
    memoId: 1,
    memoType: 'BOOK_CONTENT',
    memoContent: '',
    memoBookPage: 0,
    createdAt: '',
    updatedAt: '',
  };
  const { data = fallback } = useQuery({
    queryKey: CACHE_KEYS.randomMemo,
    queryFn: memoService.getRandomMemo,
  });
  return data;
}
