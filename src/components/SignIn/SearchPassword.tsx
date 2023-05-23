import { authService } from '@apis';
import { Button, SignInput } from '@components/common';
import Modal from '@components/common/Modal';
import { EMAIL_REGEX } from '@constants';
import useModal from '@hooks/useModal';
import { UserInfo } from '@projects/types/basic';
import { useMutation } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import styled from 'styled-components';

function SearchPassword() {
  const { isOpen, toggle } = useModal();
  const { mutate, isLoading } = useMutation(authService.getTempPassword);
  const onSubmit: SubmitHandler<Pick<UserInfo, 'email'>> = async (emailObj) => {
    const { email } = emailObj;
    mutate(email, {
      onSuccess(data) {
        if (data) {
          toast.success('임시 비밀번호가 발송되었습니다.');
        }
      },
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInfo>();

  return (
    <>
      <SSearchPw onClick={toggle}>비밀번호 찾기</SSearchPw>
      <Modal
        isOpen={isOpen}
        closeModal={toggle}
        modalWrapperId="password-search-modal"
      >
        <Sform
          onSubmit={(e) => {
            e.stopPropagation();
            handleSubmit(onSubmit)(e);
          }}
        >
          <div>이메일 주소를 입력해주세요</div>
          <SignInput
            id="email"
            type="email"
            placeholder="이메일"
            errMessage="이메일 형식에 맞게 작성해주세요."
            pattern={EMAIL_REGEX}
            register={register}
            errors={errors}
            required
          />
          <SButton
            styleType={!isLoading ? 'neutral' : 'outlineDisabled'}
            size="small"
            isLoading={isLoading}
          >
            임시 비밀번호 요청
          </SButton>
        </Sform>
      </Modal>
    </>
  );
}

export default SearchPassword;

const SSearchPw = styled.div`
  font-size: 0.7rem;
  color: ${(props) => props.theme.color.gray01};

  &:hover {
    color: ${(props) => props.theme.color.black};
    cursor: pointer;
  }
`;

const Sform = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
`;

const SButton = styled(Button)`
  width: 10rem;
`;
