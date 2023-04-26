import { profileService } from '@apis/index';
import { CACHE_KEYS } from '@constants';
import { Profile } from '@projects/types/basic';
import { useQuery } from '@tanstack/react-query';

const fallback: Profile = {
  email: '',
  name: '',
  content: '',
  url: '',
};

export default function useMyProfile() {
  const { data = fallback, isLoading } = useQuery({
    queryKey: CACHE_KEYS.myProfile,
    queryFn: profileService.getProfile,
    staleTime: 1000 * 60 * 5,
  });
  return { data, isLoading };
}
