import styled from 'styled-components';

interface Props {
  title?: string;
  onClick?: (event: React.MouseEvent<HTMLImageElement>) => void;
  children: React.ReactNode;
}

export default function Boxcontainer({ title, onClick, children }: Props) {
  return (
    <Wrapper onClick={onClick}>
      {title && <Title>{title}</Title>}
      {children}
    </Wrapper>
  );
}

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.color.gray01};
  margin-bottom: 1rem;
  font-weight: 900;
`;

const Wrapper = styled.section`
  box-shadow: 0 0 0.25rem 0 rgba(0 0 0 / 20%);
  border-radius: 0.3rem;
  padding: 1.5rem;
  font-size: ${({ theme }) => theme.fontSize.base};
`;
