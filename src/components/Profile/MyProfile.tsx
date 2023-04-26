import { Boxcontainer } from '@components/common';
import useMyProfile from './hook/useMyProfile';
import ProfileImageUpload from './ProfileImageUpload';
import EditField from './EditField';
import Field from './Field';

export default function MyProfile() {
  const { data, isLoading } = useMyProfile();

  return (
    <Boxcontainer>
      {!isLoading && <ProfileImageUpload src={data.url} />}
      <EditField field="name" value={data.name} />
      <Field field="email" fieldText={data.email} />
      <EditField field="content" value={data.content} />
    </Boxcontainer>
  );
}
