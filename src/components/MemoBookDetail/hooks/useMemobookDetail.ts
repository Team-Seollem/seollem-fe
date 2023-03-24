import { useInfiniteQuery } from '@tanstack/react-query';
import { memoService } from '@apis/index';
import { CACHE_KEYS } from '@constants';
import type { MemoBookDetail, MemoBookType } from '@projects/types/library';

type Props = {
  bookId: number;
  memoType: MemoBookType;
};

const fallback: MemoBookDetail[] = [];

export default function useMemobookDetail({ bookId, memoType }: Props) {
  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
    CACHE_KEYS.memoBooksDetail(bookId, memoType),
    ({ pageParam = 1 }) =>
      memoService.getMemoBooksByBookId(bookId, pageParam, 10, memoType),
    {
      getNextPageParam: (lastpage) => {
        const { pageInfo } = lastpage;
        const { totalPages, page: currentPage } = pageInfo;

        return currentPage >= totalPages ? undefined : currentPage + 1;
      },
      staleTime: 1000 * 60 * 5,
    }
  );
  const memoBooks = data?.pages.flatMap((page) => page.item) ?? fallback;

  return { memoBooks, isLoading, hasNextPage, fetchNextPage };
}
