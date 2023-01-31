import { FieldErrorsImpl, Path, UseFormRegister } from 'react-hook-form';

export interface Book {
  itemId: number;
  title: string;
  author: string;
  cover: string;
  publisher: string;
}
export interface SearchBookInfo {
  itemPage: number;
  title: string;
  author: string;
  cover: string;
  publisher: string;
}

type SignInputLabel = '이름' | '이메일' | '비밀번호' | '비밀번호 확인';
export interface UserInfo {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}
export type Profile = Pick<UserInfo, 'email' | 'name'>;
export type SignInInput = Pick<UserInfo, 'email' | 'password'>;
export type SignUpInput = Omit<UserInfo, 'password_confirm'> & {
  authenticationCode: string;
};

export type RecommendSort = 'best-seller' | 'item-new-special';

export interface SignInputProps {
  label: SignInputLabel;
  register: UseFormRegister<UserInfo>;
  errors: Partial<FieldErrorsImpl<UserInfo>>;
  id: Path<UserInfo>;
  type: string;
  placeholder: string;
  required: boolean;
  validate?: (value: string) => boolean;
  setValueAs?: (vlaue: string) => string;
  pattern?: RegExp;
  errMessage: string;
}
