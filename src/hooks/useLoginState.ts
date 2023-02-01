import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { tokenRepository } from '@apis';
import { loginState } from 'state/atom';
import { isValidToken } from '@utils';

const useLoginState = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);

  useEffect(() => {
    const token = tokenRepository.getToken();
    setIsLoggedIn(isValidToken(token));
  });

  return { isLoggedIn };
};
export default useLoginState;
