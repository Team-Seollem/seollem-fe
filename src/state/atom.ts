import { atom, type RecoilState } from 'recoil';
import { tokenRepository } from '@apis/index';
import { isValidToken } from '@utils';

export const loginState: RecoilState<boolean> = atom({
  key: 'isLoggedIn',
  default: isValidToken(tokenRepository.getToken()),
});
