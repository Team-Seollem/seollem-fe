import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

export default function Title({ children }: Props) {
  return <STitle>{children}</STitle>;
}

const STitle = styled.h2`
  color: ${({ theme }) => theme.color.gray01};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: bold;
  margin-bottom: 0.7rem;
`;
