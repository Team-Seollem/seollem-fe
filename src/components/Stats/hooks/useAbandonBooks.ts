import { useInfiniteQuery } from '@tanstack/react-query';
import { bookService } from '@apis/index';
import { CACHE_KEYS } from '@constants';
import { AbandonBook } from '@projects/types/library';

const fallback: AbandonBook[] = [];
export default function useAbandonBooks() {
  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
    CACHE_KEYS.abandonBooks,
    ({ pageParam = 1 }) => bookService.getAbandonBooks(pageParam, 10),
    {
      getNextPageParam: (lastpage) => {
        const { pageInfo } = lastpage;
        const { totalPages, page: currentPage } = pageInfo;

        return currentPage < totalPages ? currentPage + 1 : undefined;
      },
      staleTime: 1000 * 60 * 5,
    }
  );

  const abandonBooks = data?.pages.flatMap((page) => page.item) ?? fallback;

  return { abandonBooks, isLoading, hasNextPage, fetchNextPage };
}
