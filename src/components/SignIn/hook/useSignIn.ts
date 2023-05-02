import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { authService } from '@apis/index';
import { PAGE_URL } from '@constants';
import { loginState } from '@state/atom';
import { SignInInput } from '@projects/types/basic';

const GUEST_USER_ID = import.meta.env.VITE_APP_GUEST_USER_ID;
const GUEST_USER_PASSWORD = import.meta.env.VITE_APP_GUEST_USER_PASSWORD;

export default function useSignIn() {
  const navigate = useNavigate();
  const setIsLoggedIn = useSetRecoilState(loginState);

  const { mutate: signInMutation } = useMutation(authService.signIn, {
    onSuccess: () => {
      setIsLoggedIn(true);
      navigate(PAGE_URL.LIBRARY);
    },
  });

  const signIn = ({ email, password }: SignInInput) => {
    signInMutation({ email, password });
  };

  const guestSignIn = () => {
    signInMutation({ email: GUEST_USER_ID, password: GUEST_USER_PASSWORD });
  };

  return { signIn, guestSignIn };
}
