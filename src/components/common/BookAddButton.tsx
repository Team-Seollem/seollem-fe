import styled from 'styled-components';
import { BsPlusSquare } from 'react-icons/bs';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function BookAddButton({ children, onClick }: Props) {
  return (
    <SButton type="button" onClick={onClick}>
      <Svg />
      {children}
    </SButton>
  );
}

const SButton = styled.button`
  display: flex;
  padding: 1rem 1.5rem;
  border-radius: 0.3rem;
  margin-bottom: 1rem;
  border: none;
  text-decoration: none;
  background-color: transparent;
  box-shadow: 0 0 0.25rem 0 rgba(0 0 0 / 20%);
  &:hover {
    transform: translate(-0.1rem);
    cursor: pointer;
  }
`;

const Svg = styled(BsPlusSquare)`
  margin-right: 1rem;
`;
