import { useQuery } from '@tanstack/react-query';
import { externalService } from '@apis/index';
import type { SearchBookInfo } from '@projects/types/basic';

export default function useSearchBooks(searchQuery: string) {
  const fallback: SearchBookInfo[] = [];
  const { data = fallback, isSuccess } = useQuery({
    queryKey: ['searchBook', searchQuery],
    queryFn: () => externalService.searchBooks(searchQuery),
    enabled: !!searchQuery,
  });
  return { data, isSuccess };
}
