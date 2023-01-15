import { UserInfo } from '@projects/types/basic';
import axios from 'axios';

// 책 검색 (외부API)
export const getBookInfo = async (keyword: string) => {
  const { data } = await axios.get(`https://seollem.link/ext-lib/${keyword}`);
  return data;
};

// 로그인
export const postSignIn = async (
  SignInuserInfoData: Pick<UserInfo, 'email' | 'password'>
) => {
  const response = await axios.post(
    `https://seollem.link/login`,
    SignInuserInfoData,
    {
      withCredentials: true,
    }
  );
  return response.headers.authorization;
};

// 회원가입
export const postSignUp = async (
  SignUpuserInfoData: Omit<UserInfo, 'password_confirm'>
) => {
  const response = await axios.post(
    `https://seollem.link/join`,
    SignUpuserInfoData,
    {
      withCredentials: true,
    }
  );
  return response;
};
