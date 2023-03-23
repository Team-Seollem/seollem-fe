import { useInfiniteQuery } from '@tanstack/react-query';
import type { BookStatus, LibraryBook } from '@projects/types/library';
import { bookService } from '@apis/index';
import { CACHE_KEYS } from 'constants/cacheKey';

type Props = {
  bookStatus: BookStatus;
};

const fallback: LibraryBook[] = [];

export default function useBookSlider({ bookStatus }: Props) {
  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
    CACHE_KEYS.library(bookStatus),
    ({ pageParam = 1 }) => bookService.getLibrary(pageParam, 10, bookStatus),

    {
      getNextPageParam: (lastpage) => {
        const { pageInfo } = lastpage;
        const { totalPages, page: currentPage } = pageInfo;

        return currentPage >= totalPages ? undefined : currentPage + 1;
      },
      staleTime: 1000 * 60 * 5,
    }
  );

  const books = data?.pages.flatMap((page) => page.item) ?? fallback;

  return { books, isLoading, hasNextPage, fetchNextPage };
}
