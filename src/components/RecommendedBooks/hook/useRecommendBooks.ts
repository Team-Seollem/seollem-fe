import { useQuery, useQueryClient } from '@tanstack/react-query';
import { CACHE_KEYS, RECOMMENDED_SORT } from '@constants';
import type { RecommendSort, SearchBookInfo } from '@projects/types/basic';
import { externalService } from '@apis/index';

export const useRecommendBooks = (sort: RecommendSort) => {
  const fallback: SearchBookInfo[] = [];

  const { data = fallback, isSuccess } = useQuery({
    queryKey: CACHE_KEYS.recommendBooks(sort),
    queryFn: () => externalService.getRecommendedBooksList(sort),
    staleTime: 1000 * 60 * 60 * 24,
  });
  return { data, isSuccess };
};

export const usePrefetchRecommendBooks = () => {
  const queryClient = useQueryClient();
  const recommendedSortValues = RECOMMENDED_SORT.map((sort) => sort.value);

  recommendedSortValues.forEach((sort) => {
    queryClient.prefetchQuery({
      queryKey: CACHE_KEYS.recommendBooks(sort),
      queryFn: () => externalService.getRecommendedBooksList(sort),
      staleTime: 1000 * 60 * 60 * 24,
    });
  });
};
