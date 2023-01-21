import { SearchBookInfo } from '@projects/types/basic';
import { useNavigate } from 'react-router-dom';

// 책 추천 및 검색 페이지에서 책 정보 클릭 시 호출되는 함수
export const HandleClickBookInfo = (bookInfoData: SearchBookInfo) => {
  const navigate = useNavigate();
  navigate(`/detail/book/${bookInfoData.title}`, {
    state: {
      bookInfoData,
    },
  });
};
