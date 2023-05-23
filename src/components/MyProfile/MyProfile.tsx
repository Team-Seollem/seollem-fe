import { Boxcontainer, Field } from '@components/common';
import styled from 'styled-components';
import useMyProfile from './hook/useMyProfile';
import ProfileImageUpload from './ProfileImageUpload';
import EditField from './EditField';
import WithdrawlConfirmButton from './WithdrawlConfirmButton';
import PasswordChangeButton from './PasswordChangeButton';

export default function MyProfile() {
  const { data } = useMyProfile();

  return (
    <Boxcontainer>
      <ProfileImageUpload />
      <EditField field="name" value={data.name} />
      <Field field="email" fieldText={data.email} />
      <EditField field="content" value={data.content} />
      <ButtonWrapper>
        <PasswordChangeButton />
        <WithdrawlConfirmButton />
      </ButtonWrapper>
    </Boxcontainer>
  );
}

const ButtonWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0;
  @media (max-width: 410px) {
    width: 100%;
  }
`;
