import { useQuery } from '@tanstack/react-query';
import { CACHE_KEYS } from '@constants';
import { memoService } from '@apis/index';
import { MemoBooksResponse } from '@projects/types/library';

type Props = {
  page: number;
};

const fallback: MemoBooksResponse = {
  item: [
    {
      bookId: 0,
      title: '',
      cover: '',
      memoCount: 0,
    },
  ],
  pageInfo: {
    page: 1,
    size: 10,
    totalElements: 0,
    totalPages: 0,
  },
};

export default function useMemoBooks({ page }: Props) {
  const { data = fallback } = useQuery({
    queryKey: CACHE_KEYS.memoBooks(page),
    queryFn: () => memoService.getMemoBooks(page, 10),
    staleTime: 1000 * 60 * 5,
  });
  return data;
}
