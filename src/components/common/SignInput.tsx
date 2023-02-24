import { SignInputProps } from '@projects/types/basic';
import { ErrorMessage } from '@hookform/error-message';
import styled from 'styled-components';

function SignInput({
  id,
  type,
  placeholder,
  pattern,
  register,
  required,
  validate,
  setValueAs,
  label,
  errors,
  errMessage,
}: SignInputProps) {
  return (
    <SWrapper>
      <label htmlFor={id}>{label}</label>
      <SInput
        id={id}
        type={type}
        placeholder={placeholder}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register(id, { pattern, required, validate, setValueAs })}
      />
      <ErrorMessage
        errors={errors}
        name={id}
        render={() => <SErrMessage>{errMessage}</SErrMessage>}
      />
    </SWrapper>
  );
}

export default SignInput;

const SWrapper = styled.div`
  width: 100%;
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;

const SInput = styled.input`
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
`;

const SErrMessage = styled.div`
  color: ${(props) => props.theme.color.negative};
  font-size: 0.7rem;
  margin: 1rem 0;
`;
