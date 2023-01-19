import { getRecommendedBooksList } from '@apis/index';
import { useQuery } from '@tanstack/react-query';

// 추천 책 query
export const RecommendedBooksQuery = (sort: string) => {
  return useQuery(['RecommendedBooks', sort], () =>
    getRecommendedBooksList(sort)
  );
};
