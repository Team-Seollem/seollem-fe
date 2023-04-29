import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';
import { profileService, authService } from '@apis/index';
import { loginState } from '@state/atom';

export default function useDeleteMyProfile() {
  const queryClient = useQueryClient();
  const setIsLoggedIn = useSetRecoilState(loginState);
  const { mutate } = useMutation(profileService.deleteProfile, {
    onSuccess: () => {
      toast.success('회원 탈퇴가 완료되었습니다.');
      authService.signOut();
      setIsLoggedIn(false);
      queryClient.clear();
    },
  });
  return mutate;
}
