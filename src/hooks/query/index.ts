import { useQuery } from '@tanstack/react-query';

import { externalService } from '@apis/index';
import type { RecommendSort } from '@projects/types/basic';

// 추천 책 query
export const RecommendedBooksQuery = (sort: string) => {
  return useQuery(['RecommendedBooks', sort], () =>
    externalService.searchBooks(sort)
  );
};

// 책 검색 결과 query
export const SearchBookQuery = (searchQuery: RecommendSort) => {
  return useQuery(
    ['searchBook', searchQuery],
    () => externalService.getRecommendedBooksList(searchQuery),
    {
      enabled: !!searchQuery,
    }
  );
};
