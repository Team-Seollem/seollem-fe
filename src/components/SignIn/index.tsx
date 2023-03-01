import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import type { UserInfo, SignInInput } from '@projects/types/basic';
import { authService } from '@apis';
import { EMAIL_REGEX, PAGE_URL, PASSWORD_REGEX } from '@constants';
import { Button, SignContainer, SignInput } from '@components/common';
import { loginState } from '@state/atom';
import SearchPassword from './SearchPassword';

function SignIn(): JSX.Element {
  const navigate = useNavigate();

  const setIsLoggedIn = useSetRecoilState(loginState);
  const { mutate } = useMutation(authService.signIn);

  const onSubmit: SubmitHandler<SignInInput> = (userInfoData) => {
    mutate(userInfoData, {
      onSuccess(data) {
        if (data) {
          setIsLoggedIn(true);
          navigate('/book/search');
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
    <SignContainer height="22rem" onSubmit={handleSubmit(onSubmit)}>
      <SignInput
        label="이메일"
        id="email"
        type="email"
        placeholder="이메일"
        errMessage="이메일 형식에 맞게 작성해주세요."
        pattern={EMAIL_REGEX}
        register={register}
        errors={errors}
        required
      />
      <SignInput
        label="비밀번호"
        id="password"
        type="password"
        placeholder="비밀번호"
        errMessage="6자 이상 영문 대 소문자, 숫자와 특수기호만 사용가능합니다."
        pattern={PASSWORD_REGEX}
        register={register}
        errors={errors}
        required
      />
      <Button styleType="solidPositive" size="large">
        로그인하기
      </Button>
      <SearchPassword />
      <SLink to={PAGE_URL.SIGN_UP}>아직 회원이 아니신가요?</SLink>
    </SignContainer>
  );
}

export default SignIn;

const SLink = styled(Link)`
  font-size: 0.7rem;
  text-decoration: none;
  color: ${(props) => props.theme.color.gray01};

  &:hover {
    color: ${(props) => props.theme.color.black};
  }
`;
