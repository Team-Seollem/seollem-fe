import { getBookInfo, getRecommendedBooksList } from '@apis/index';
import { useQuery } from '@tanstack/react-query';

// 추천 책 query
export const RecommendedBooksQuery = (sort: string) => {
  return useQuery(['RecommendedBooks', sort], () =>
    getRecommendedBooksList(sort)
  );
};

// 책 검색 결과 query
export const SearchBookQuery = (searchQuery: string) => {
  return useQuery(['searchBook', searchQuery], () => getBookInfo(searchQuery), {
    enabled: !!searchQuery,
  });
};
