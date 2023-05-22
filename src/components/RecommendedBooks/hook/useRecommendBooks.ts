import { externalService } from '@apis/index';
import { CACHE_KEYS } from '@constants';
import type { RecommendSort } from '@projects/types/basic';
import { useQuery } from '@tanstack/react-query';

export const useRecommendBooks = (sort: RecommendSort) => {
  return useQuery(CACHE_KEYS.recommendBooks(sort), () =>
    externalService.getRecommendedBooksList(sort)
  );
};
