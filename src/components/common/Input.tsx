import { SignInInputProps } from '@projects/types/basic';
import styled from 'styled-components';

// 로그인/회원가입 input
function SignInput({
  label,
  type,
  placeholder,
  pattern,
  register,
  required,
}: SignInInputProps) {
  return (
    <FormWrapper>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register(label, { pattern, required })}
      />
    </FormWrapper>
  );
}

export default SignInput;
export const FormWrapper = styled.div`
  width: 100%;
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  input {
    padding: 0.5rem 0.75rem;
    border: 1px solid ${(props) => props.theme.color.gray04};
    border-radius: 0.25rem;
    outline-color: ${(props) => props.theme.color.primary};
    width: 100%;
    font-family: 'Pretendard-Regular';

    &::placeholder {
      font-size: 0.8rem;
      font-family: 'Pretendard-Regular';
    }
  }
`;
