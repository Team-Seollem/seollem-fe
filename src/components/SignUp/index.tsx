import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { authService } from '@apis/index';
import { useMutation } from '@tanstack/react-query';
import { SignUpInput, UserInfo } from '@projects/types/basic';
import { Button, SignContainer, SignInput } from '@components/common';
import { EMAIL_REGEX, PASSWORD_REGEX } from '@constants';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';

function SignUp() {
  const navigate = useNavigate();

  const { mutate } = useMutation(authService.signUp);
  const onSubmit: SubmitHandler<SignUpInput> = (userInfoData) => {
    mutate(userInfoData, {
      onSuccess(data) {
        if (data) {
          toast.success('회원 가입에 성공했습니다.');
          navigate('/auth/signin');
        }
      },
    });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = useForm<UserInfo>();

  const password = useRef('');
  password.current = watch('password');

  const emailAuthCodeMutation = useMutation({
    mutationFn: (email: string) => authService.getEmailAuthCode(email),
    onSuccess(data) {
      toast.success(data);
    },
  });

  const emailHandleClick = () => {
    const value = getValues('email');
    if (EMAIL_REGEX.test(value)) {
      emailAuthCodeMutation.mutate(value);
    } else {
      toast.error('이메일 형식이어야 합니다.');
    }
  };

  return (
    <SignContainer height="38rem" onSubmit={handleSubmit(onSubmit)}>
      <SignInput
        id="name"
        label="이름"
        type="text"
        placeholder="이름"
        register={register}
        errors={errors}
        errMessage="사용하실 이름을 작성해주세요."
        setValueAs={(value) => value.trim()}
        required
      />
      <SignInput
        id="email"
        label="이메일"
        type="email"
        placeholder="이메일"
        pattern={EMAIL_REGEX}
        register={register}
        errors={errors}
        errMessage="이메일 형식이어야 합니다."
        required
      />
      <SButton
        onClick={emailHandleClick}
        styleType="neutral"
        size="small"
        type="button"
        disabled={emailAuthCodeMutation.isLoading}
        isLoading={emailAuthCodeMutation.isLoading}
      >
        이메일 인증 번호 요청
      </SButton>
      <SignInput
        id="authenticationCode"
        label="이메일 인증 번호"
        type="text"
        placeholder="이메일 인증 번호"
        pattern={/^\d{6,}$/}
        register={register}
        errors={errors}
        errMessage="이메일 인증 번호를 입력해주세요."
        required
      />
      <SignInput
        id="password"
        label="비밀번호"
        type="password"
        placeholder="비밀번호"
        pattern={PASSWORD_REGEX}
        register={register}
        errors={errors}
        errMessage="영문 대 소문자, 숫자와 특수기호 포함 6자 이상이어야 합니다."
        required
      />
      <SignInput
        id="password_confirm"
        label="비밀번호 확인"
        type="password"
        placeholder="비밀번호 확인"
        register={register}
        validate={(value) => value === password.current}
        errors={errors}
        errMessage="비밀번호가 일치하지 않습니다."
        required
      />
      <Button styleType="solidPositive" size="large">
        회원가입
      </Button>
    </SignContainer>
  );
}

export default SignUp;

const SButton = styled(Button)`
  width: 10rem;
`;
