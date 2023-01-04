import PostBook from '@components/PostBook';
import { useLocation } from 'react-router-dom';

function PostBookPage() {
  const location = useLocation();
  const { bookInfoData } = location.state;
  return <PostBook bookInfoData={bookInfoData} />;
}
export default PostBookPage;
