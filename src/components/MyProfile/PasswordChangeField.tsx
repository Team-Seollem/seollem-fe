import type { SubmitHandler } from 'react-hook-form';
import { UserInfo } from '@projects/types/basic';
import { Button, Modal } from '@components/common';
import useModal from '@hooks/useModal';
import useEditMyProfile from './hook/useEditMyProfile';
import PasswordChangeForm from './PasswordChangeForm';
import * as S from './styles';

export default function PasswordChangeField() {
  const { isOpen, toggle } = useModal();

  const { changePasswordMutation } = useEditMyProfile();

  const onSubmit: SubmitHandler<Pick<UserInfo, 'password'>> = async (
    passwordObj
  ) => {
    const { password } = passwordObj;
    changePasswordMutation({ password });
  };

  return (
    <>
      <S.Wrapper>
        <S.Label>비밀번호</S.Label>
        <Button type="button" styleType="neutral" size="small" onClick={toggle}>
          비밀번호 변경
        </Button>
      </S.Wrapper>

      <Modal
        isOpen={isOpen}
        closeModal={toggle}
        modalWrapperId="password-change-modal"
      >
        변경할 비밀번호를 입력해주세요
        <PasswordChangeForm onSubmit={onSubmit} />
      </Modal>
    </>
  );
}
