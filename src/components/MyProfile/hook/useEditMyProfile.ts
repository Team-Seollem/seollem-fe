import { profileService } from '@apis/index';
import { CACHE_KEYS } from '@constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export default function useEditMyProfile() {
  const queryClient = useQueryClient();
  const { mutate: editProfileMutation, isLoading } = useMutation(
    profileService.editProfile,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(CACHE_KEYS.myProfile);
      },
    }
  );

  const { mutate: changePasswordMutation } = useMutation(
    profileService.editProfile,
    {
      onSuccess: () => {
        toast.success('비밀번호가 변경되었습니다.');
      },
    }
  );

  return { editProfileMutation, changePasswordMutation, isLoading };
}
