import { Boxcontainer } from '@components/common';
import useMyProfile from './hook/useMyProfile';
import ProfileImageUpload from './ProfileImageUpload';

export default function MyProfile() {
  const { data, isLoading } = useMyProfile();

  return (
    <Boxcontainer>
      {!isLoading && <ProfileImageUpload src={data.url} />}
    </Boxcontainer>
  );
}
