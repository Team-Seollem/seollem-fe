import { useQuery } from '@tanstack/react-query';

import { externalService } from '@apis/index';

// 추천 책 query

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
