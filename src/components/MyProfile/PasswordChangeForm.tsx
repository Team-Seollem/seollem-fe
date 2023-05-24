import { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Button, SignInput } from '@components/common';
import { PASSWORD_REGEX } from '@constants';
import { UserInfo } from '@projects/types/basic';

type Props = {
  onSubmit: SubmitHandler<Pick<UserInfo, 'password'>>;
};

export default function PasswordChangeForm({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<UserInfo>();

  const password = useRef('');
  password.current = watch('password');

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <SignInput
        id="password"
        label="비밀번호"
        type="password"
        placeholder="비밀번호"
        errMessage="영문 대 소문자, 숫자와 특수기호 포함 6자 이상이어야 합니다."
        pattern={PASSWORD_REGEX}
        register={register}
        errors={errors}
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
      <Button styleType="solidPositive" size="small">
        비밀번호 변경
      </Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  gap: 1rem;
`;
