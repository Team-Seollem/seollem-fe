import { useQuery } from '@tanstack/react-query';

import { externalService } from '@apis/index';
import type { RecommendSort } from '@projects/types/basic';

// 추천 책 query
export const RecommendedBooksQuery = (sort: RecommendSort) => {
  return useQuery(['RecommendedBooks', sort], () =>
    externalService.getRecommendedBooksList(sort)
  );
};

// 책 검색 결과 query
export const SearchBookQuery = (searchQuery: string) => {
  return useQuery(
    ['searchBook', searchQuery],
    () => externalService.searchBooks(searchQuery),
    {
      enabled: !!searchQuery,
    }
  );
};
