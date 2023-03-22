import { useInfiniteQuery } from '@tanstack/react-query';
import type { BookStatus } from '@projects/types/library';
import { bookService } from '@apis/index';
import { CACHE_KEYS } from 'constants/cacheKey';

type Props = {
  bookStatus: BookStatus;
};

export const useBookSlider = ({ bookStatus }: Props) => {
  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
    CACHE_KEYS.library(bookStatus),
    ({ pageParam = 1 }) => bookService.getLibrary(pageParam, bookStatus),

    {
      getNextPageParam: (lastpage) => {
        const { pageInfo } = lastpage;
        const nextPage = pageInfo.page + 1;

        return nextPage <= pageInfo.totalPages ? nextPage : undefined;
      },
      staleTime: 1000 * 60 * 5,
    }
  );
  return { data, isLoading, hasNextPage, fetchNextPage };
};
