import { PageTitle } from '@components/common';
import MyProfile from '../components/Profile/MyProfile';

export default function MyPage() {
  return (
    <>
      <PageTitle title="나의 정보 보기" />
      <MyProfile />
    </>
  );
}
