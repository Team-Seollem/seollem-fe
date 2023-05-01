import { communityService } from '@apis/index';
import { CACHE_KEYS } from '@constants';
import { MemberMemo } from '@projects/types/library';
import { useInfiniteQuery } from '@tanstack/react-query';

type Props = {
  memberId: number;
  bookId: number;
};

export default function useMemberMemoBook({ memberId, bookId }: Props) {
  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
    CACHE_KEYS.memberMemoBook(memberId, bookId),
    ({ pageParam = 1 }) =>
      communityService.getMemberMemo(bookId, pageParam, 10),
    {
      getNextPageParam: (lastPage) => {
        const { pageInfo } = lastPage;
        const { totalPages, page: currentPage } = pageInfo;

        return currentPage < totalPages ? currentPage + 1 : undefined;
      },
      staleTime: 1000 * 60 * 5,
    }
  );

  const bookInfo = {
    title: data?.pages[0].title ?? '',
    author: data?.pages[0].author ?? '',
    cover: data?.pages[0].cover ?? '',
    publisher: data?.pages[0].publisher ?? '',
    itemPage: data?.pages[0].itemPage ?? 0,
    currentPage: data?.pages[0].currentPage ?? 0,
    star: data?.pages[0].star ?? 0,
    bookStatus: data?.pages[0].bookStatus ?? 'DONE',
  };

  const memoList: MemberMemo[] =
    data?.pages.flatMap((page) => page.memoList) ?? [];

  return { bookInfo, memoList, isLoading, hasNextPage, fetchNextPage };
}
