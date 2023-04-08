import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};
export default function Badge({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  display: inline-block;
  width: fit-content;
  padding: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.gray02};
  border-radius: 0.3rem;
`;
