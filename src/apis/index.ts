import { UserInfo } from '@projects/types/basic';
import axios from 'axios';

// 책 검색 (외부API)
export const getBookInfo = async (keyword: string) => {
  const { data } = await axios.get(`https://seollem.link/ext-lib/${keyword}`);
  return data;
};

export const postSignIn = async (userInfoData: Omit<UserInfo, 'name'>) => {
  const response = await axios.post(
    `https://seollem.link/login`,
    userInfoData,
    {
      withCredentials: true,
    }
  );
  return response.headers.authorization;
};
