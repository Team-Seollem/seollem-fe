import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { postSignUp } from '@apis/index';
import { useMutation } from '@tanstack/react-query';
import { UserInfo } from '@projects/types/basic';
import { Button, SignContainer, SignInput } from '@components/common';
import { EMAIL_REGEX, PASSWORD_REGEX } from '@constants';
import { useRef } from 'react';

function SignUp() {
  const navigate = useNavigate();

  const { mutate } = useMutation(postSignUp);
  const onSubmit: SubmitHandler<Omit<UserInfo, 'password_confirm'>> = (
    userInfoData
  ) => {
    mutate(userInfoData, {
      onSuccess(data) {
        if (data) {
          alert('회원 가입에 성공하셨습니다. 로그인 페이지로 이동합니다.');
          navigate('/auth/signin');
        }
      },
      onError(err) {
        if (err) alert('이미 존재하는 회원입니다.');
      },
    });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<UserInfo>();

  const password = useRef('');
  password.current = watch('password');

  return (
    <SignContainer
      width="30rem"
      height="30rem"
      onSubmit={handleSubmit(onSubmit)}
    >
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
