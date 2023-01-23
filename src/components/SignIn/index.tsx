import { SubmitHandler, useForm } from 'react-hook-form';
import { UserInfo } from '@projects/types/basic';
import { postSignIn } from '@apis/index';
import { useMutation } from '@tanstack/react-query';
import { EMAIL_REGEX, PAGE_URL, PASSWORD_REGEX } from '@constants';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button, SignContainer, SignInput } from '@components/common';
import styled from 'styled-components';

function SignIn(): JSX.Element {
  const navigate = useNavigate();

  const { mutate } = useMutation(postSignIn);
  const onSubmit: SubmitHandler<Pick<UserInfo, 'email' | 'password'>> = (
    userInfoData
  ) => {
    mutate(userInfoData, {
      onSuccess(data) {
        if (data) {
          localStorage.setItem('token', data);
          navigate('/book/search');
        }
      },
      onError(err) {
        if (err) {
          alert(
            '등록되지 않은 아이디이거나 아이디 또는 비밀번호를 잘못 입력했습니다.'
          );
        }
      },
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInfo>();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/book/search');
    }
  }, [navigate]);

  return (
    <SignContainer
      width="22rem"
      height="22rem"
      onSubmit={handleSubmit(onSubmit)}
    >
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
      <SLink to={PAGE_URL.SIGN_UP}>아직 회원이 아니신가요?</SLink>
    </SignContainer>
  );
}

export default SignIn;

const SLink = styled(Link)`
  font-size: 0.5rem;
  text-decoration: none;
  color: ${(props) => props.theme.color.gray01};

  &:hover {
    color: ${(props) => props.theme.color.black};
  }
`;
