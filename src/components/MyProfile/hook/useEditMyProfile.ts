import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { CACHE_KEYS } from '@constants';
import { profileService } from '@apis/index';
import useLogout from '@components/layout/hook/useLogout';

export default function useEditMyProfile() {
  const queryClient = useQueryClient();

  const logout = useLogout();
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
        logout();
      },
    }
  );

  return { editProfileMutation, changePasswordMutation, isLoading };
}
