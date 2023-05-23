import PostBook from '@components/PostBook';
import { SearchBookInfo } from '@projects/types/basic';
import { useLocation } from 'react-router-dom';

type LocationState = {
  state: {
    bookInfoData: SearchBookInfo;
  };
};

function PostBookPage() {
  const location = useLocation() as LocationState;
  const { bookInfoData } = location.state;
  return <PostBook bookInfoData={bookInfoData} />;
}
export default PostBookPage;
