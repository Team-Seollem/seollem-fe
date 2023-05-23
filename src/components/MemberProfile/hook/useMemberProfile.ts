import { useInfiniteQuery } from '@tanstack/react-query';
import { communityService } from '@apis/index';
import { CACHE_KEYS } from '@constants';
import { MemberLibraryBook } from '@projects/types/library';

type Props = {
  memberId: number;
};

const fallback: MemberLibraryBook[] = [];

export default function useMemberProfile({ memberId }: Props) {
  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
    CACHE_KEYS.memberProfile(memberId),
    ({ pageParam = 1 }) =>
      communityService.getMemberProfile(memberId, pageParam, 10),
    {
      getNextPageParam: (lastPage) => {
        const { pageInfo } = lastPage;
        const { totalPages, page: currentPage } = pageInfo;

        return currentPage < totalPages ? currentPage + 1 : undefined;
      },
      staleTime: 1000 * 60 * 5,
    }
  );
  const name = data?.pages[0].name ?? '';
  const content = data?.pages[0].content ?? '';
  const url = data?.pages[0].url ?? '';

  const library = data?.pages.flatMap((page) => page.otherLibrary) ?? fallback;

  return { name, content, url, library, isLoading, hasNextPage, fetchNextPage };
}
