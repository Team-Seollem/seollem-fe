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
  const { data = fallback, isLoading } = useQuery({
    queryKey: CACHE_KEYS.memoBooksPage(page),
    queryFn: () => memoService.getMemoBooks(page, 12),
    staleTime: 1000 * 60 * 5,
  });
  return { memoBooks: data.item, pageInfo: data.pageInfo, isLoading };
}
