import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { authService } from '@apis/index';
import { PAGE_URL } from '@constants';
import { loginState } from '@state/atom';

export default function useGuestLogin() {
  const navigate = useNavigate();

  const setIsLoggedIn = useSetRecoilState(loginState);

  const { mutate } = useMutation(authService.signIn, {
    onSuccess: () => {
      setIsLoggedIn(true);
      navigate(PAGE_URL.LIBRARY);
    },
  });

  const guestLogin = () => {
    //
  };

  return { guestLogin };
}
