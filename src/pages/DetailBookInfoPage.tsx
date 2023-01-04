import DetailBookInfo from '@components/DetailBookInfo';
import { useLocation } from 'react-router-dom';

function DetailBookInfoPage() {
  const location = useLocation();
  const { bookInfoData } = location.state;
  return <DetailBookInfo bookInfoData={bookInfoData} />;
}

export default DetailBookInfoPage;
