import { Button } from '@components/common';
import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
`;

export const FormButton = styled(Button)`
  font-size: ${({ theme }) => theme.fontSize.base};
  margin-top: 1rem;
`;
