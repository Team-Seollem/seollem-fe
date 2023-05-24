import { useSetRecoilState } from 'recoil';
import { useQueryClient } from '@tanstack/react-query';
import { loginState } from '@state/atom';
import { authService } from '@apis/index';

export default function useLogout() {
  const setIsLoggedIn = useSetRecoilState(loginState);
  const queryClient = useQueryClient();

  const logout = () => {
    authService.signOut();
    queryClient.clear();
    setIsLoggedIn(false);
  };

  return logout;
}
