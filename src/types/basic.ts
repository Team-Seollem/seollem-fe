import { BookStatus } from '@projects/types/library';
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

export interface PostBookInfo {
  title: string;
  author: string;
  cover: string;
  itemPage: number;
  publisher: string;
  bookStatus: BookStatus;
  readStartDate: string | null;
  readEndDate: string | null;
}

type SignInputLabel =
  | '이름'
  | '이메일'
  | '이메일 인증 번호'
  | '비밀번호'
  | '비밀번호 확인';
export interface UserInfo {
  name: string;
  email: string;
  authenticationCode: string;
  password: string;
  password_confirm: string;
}
export type Profile = Pick<UserInfo, 'email' | 'name'> & {
  content: string;
  url: string;
  memberId: number;
};
export type SignInInput = Pick<UserInfo, 'email' | 'password'>;
export type SignUpInput = Omit<UserInfo, 'password_confirm'>;
export type SearchPwInput = Pick<UserInfo, 'email'>;

export type RecommendSort = 'best-seller' | 'item-new-special';

export interface SignInputProps {
  label?: SignInputLabel;
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
