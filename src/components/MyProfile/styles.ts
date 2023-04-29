import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.color.gray02};
  font-size: ${({ theme }) => theme.fontSize.base};
  margin: 0.5rem;
  padding: 0.5rem;
  @media (max-width: 410px) {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

export const Label = styled.label`
  font-weight: bold;
  color: ${({ theme }) => theme.color.black};
  margin-right: 1rem;
  white-space: nowrap;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.color.gray01};
  padding: 0.5rem;
  align-items: center;
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.color.gray01};
  border: 2px solid ${({ theme }) => theme.color.gray03};
  outline: none;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.base};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 0.3rem;
  padding: 0.5rem;
  @media (max-width: 410px) {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
