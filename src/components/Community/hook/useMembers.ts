import { useQuery } from '@tanstack/react-query';
import { CACHE_KEYS } from '@constants';
import { communityService } from '@apis/index';
import type { MemberResponse } from '@apis/communityService';

const fallback: MemberResponse = {
  mostReadMember: [],
  mostMemoedMember: [],
};

export default function useMembers() {
  const { data = fallback } = useQuery({
    queryKey: CACHE_KEYS.community,
    queryFn: communityService.getMembers,
    staleTime: 1000 * 60 * 5,
  });

  return { data };
}
