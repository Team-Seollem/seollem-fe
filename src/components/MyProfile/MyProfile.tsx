import { Boxcontainer, Field } from '@components/common';
import useMyProfile from './hook/useMyProfile';
import ProfileImageUpload from './ProfileImageUpload';
import EditField from './EditField';
import WithdrawlConfirmButton from './WithdrawlConfirmButton';
import PasswordChangeField from './PasswordChangeField';

export default function MyProfile() {
  const { data } = useMyProfile();

  return (
    <Boxcontainer>
      <ProfileImageUpload />
      <EditField field="name" value={data.name} />
      <Field field="email" fieldText={data.email} />
      <PasswordChangeField />
      <EditField field="content" value={data.content} />
      <WithdrawlConfirmButton />
    </Boxcontainer>
  );
}
