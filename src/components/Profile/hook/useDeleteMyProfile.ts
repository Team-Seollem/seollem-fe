import { profileService } from '@apis/index';
import { CACHE_KEYS } from '@constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useDeleteMyProfile() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(profileService.deleteProfile, {
    onSuccess: () => {
      queryClient.invalidateQueries(CACHE_KEYS.myProfile);
    },
  });
  return mutate;
}
