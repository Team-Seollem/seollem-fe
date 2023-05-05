import styled from 'styled-components';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Badge({ children, onClick }: Props) {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
}

const Wrapper = styled.button`
  display: inline-block;
  width: fit-content;
  padding: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.gray02};
  border-radius: 0.3rem;
  line-height: 1rem;
  cursor: pointer;
`;
