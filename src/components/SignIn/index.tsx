import styled from 'styled-components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserInfo } from '@projects/types/basic';
import Button from '@components/common/Button';
import SignInput from '@components/common/Input';
import { postSignIn } from '@apis/index';
import { useMutation } from '@tanstack/react-query';
import { EMAIL_REGEX, PAGE_URL, PASSWORD_REGEX } from '@constants';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function SignIn(): JSX.Element {
  const navigate = useNavigate();

  const { mutate, isSuccess, data } = useMutation(postSignIn);
  const onSubmit: SubmitHandler<Omit<UserInfo, 'name'>> = (userInfoData) => {
    mutate(userInfoData);
    if (isSuccess && data) {
      localStorage.setItem('token', data);
      navigate('/search/book');
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<UserInfo, 'name'>>();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/search/book');
    }
  }, [navigate]);

  return (
    <SContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SignInput
          label="email"
          type="email"
          placeholder="이메일"
          pattern={EMAIL_REGEX}
          register={register}
          required
        />
        {errors.email && (
          <SErrorMessage>이메일 형식에 맞게 작성해주세요.</SErrorMessage>
        )}
        <SignInput
          label="password"
          type="password"
          placeholder="비밀번호"
          pattern={PASSWORD_REGEX}
          register={register}
          required
        />
        {errors.password && (
          <SErrorMessage>
            6자 이상 영문 대 소문자, 숫자와 특수기호만 사용가능합니다.
          </SErrorMessage>
        )}
        <Button styleType="solidPositive" size="large">
          로그인하기
        </Button>
      </form>
      <SLink to={PAGE_URL.SIGN_UP}>아직 회원이 아니신가요?</SLink>
    </SContainer>
  );
}

export default SignIn;

const SContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20rem;
  height: 20rem;
  border-radius: 0.25rem;
  box-shadow: 0rem 0rem 0.25rem 0rem rgba(0 0 0 / 20%);
  padding: 1.5rem 2rem;

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

const SErrorMessage = styled.div`
  color: ${(props) => props.theme.color.negative};
  font-size: 0.6rem;
`;

const SLink = styled(Link)`
  font-size: 0.5rem;
  text-decoration: none;
  color: ${(props) => props.theme.color.gray01};

  &:hover {
    color: ${(props) => props.theme.color.black};
  }
`;
