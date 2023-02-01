import { atom, type RecoilState } from 'recoil';

export const loginState: RecoilState<boolean> = atom({
  key: 'isLoggedIn',
  default: false,
});
