import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { tokenRepository } from '@apis';
import { loginState } from 'state/atom';
import { isValidToken } from '@utils';

export default function useLoginState() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const token = tokenRepository.getToken();

  useEffect(() => {
    setIsLoggedIn(isValidToken(token));
  }, [token, setIsLoggedIn]);

  return { isLoggedIn };
}
