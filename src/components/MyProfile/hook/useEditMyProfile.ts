import { profileService } from '@apis/index';
import { CACHE_KEYS } from '@constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useEditMyProfile() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(profileService.editProfile, {
    onSuccess: () => {
      queryClient.invalidateQueries(CACHE_KEYS.myProfile);
    },
  });

  return { mutate, isLoading };
}
