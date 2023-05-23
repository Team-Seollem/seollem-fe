import { useQuery } from '@tanstack/react-query';
import { CACHE_KEYS } from '@constants';
import { communityService } from '@apis/index';
import type { MemberResponse } from '@projects/types/library';

const fallback: MemberResponse = {
  mostReadMember: [],
  mostMemoedMember: [],
};

export default function useMembers() {
  const { data = fallback } = useQuery({
    queryKey: CACHE_KEYS.community,
    queryFn: communityService.getMembers,
  });

  return { data };
}
