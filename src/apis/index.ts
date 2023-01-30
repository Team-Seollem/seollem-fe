import { UserInfo } from '@projects/types/basic';
import axios from 'axios';
import { AuthService } from './authService';
import { HttpClientImpl } from './httpClient';
import { TokenRepositoryImpl } from './tokenRepository';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const httpClient = new HttpClientImpl(BASE_URL);
export const tokenRepository = new TokenRepositoryImpl();

export const authService = new AuthService(httpClient, tokenRepository);

// 책 검색 (외부API)
export const getBookInfo = async (keyword: string) => {
  const { data } = await axios.get(`${BASE_URL}/ext-lib/${keyword}`);
  return data;
};

// 베스트셀러 조회 | 주목할만한 신간 리스트 조회 외부(API)
export const getRecommendedBooksList = async (sort: string) => {
  const { data } = await axios.get(`${BASE_URL}/ext-lib/${sort}`);
  return data;
};

// 로그인
export const postSignIn = async (
  SignInuserInfoData: Pick<UserInfo, 'email' | 'password'>
) => {
  const response = await axios.post(`${BASE_URL}/login`, SignInuserInfoData, {
    withCredentials: true,
  });
  return response.headers.authorization;
};

// 회원가입
export const postSignUp = async (
  SignUpuserInfoData: Omit<UserInfo, 'password_confirm'>
) => {
  const response = await axios.post(`${BASE_URL}/join`, SignUpuserInfoData, {
    withCredentials: true,
  });
  return response;
};
