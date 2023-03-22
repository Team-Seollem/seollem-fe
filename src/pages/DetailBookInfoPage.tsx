import DetailBookInfo from '@components/DetailBookInfo';
import { SearchBookInfo } from '@projects/types/basic';
import { useLocation } from 'react-router-dom';

type LocationState = {
  state: {
    bookInfoData: SearchBookInfo;
  };
};
function DetailBookInfoPage() {
  const location = useLocation() as LocationState;
  const { bookInfoData } = location.state;
  return <DetailBookInfo bookInfoData={bookInfoData} />;
}

export default DetailBookInfoPage;
