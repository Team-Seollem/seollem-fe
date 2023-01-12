import { UseFormRegister, Path } from 'react-hook-form';

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
export interface BookInfoProps {
  bookInfoData: SearchBookInfo;
}
export interface SearchProps {
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  keyword: string;
}
export interface UserInfo {
  name: string;
  email: string;
  password: string;
}

export interface SignInInputProps {
  label: Path<Omit<UserInfo, 'name'>>;
  type: string;
  placeholder: string;
  pattern: RegExp;
  register: UseFormRegister<Omit<UserInfo, 'name'>>;
  required: boolean;
}
