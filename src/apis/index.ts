import axios from 'axios';

// 책 검색 (외부API)
export const getBookInfo = async (keyword: string) => {
  const { data } = await axios.get(`https://seollem.link/ext-lib/${keyword}`);
  return data;
};
