import { Boxcontainer } from '@components/common';
import useMyProfile from './hook/useMyProfile';
import ProfileImageUpload from './ProfileImageUpload';
import EditField from './EditField';
import Field from './Field';
import WithdrawlConfirmButton from './WithdrawlConfirmButton';

export default function MyProfile() {
  const { data } = useMyProfile();

  return (
    <Boxcontainer>
      <ProfileImageUpload />
      <EditField field="name" value={data.name} />
      <Field field="email" fieldText={data.email} />
      <EditField field="content" value={data.content} />
      <WithdrawlConfirmButton />
    </Boxcontainer>
  );
}
