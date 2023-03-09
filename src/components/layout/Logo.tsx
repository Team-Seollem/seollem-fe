import { Link } from 'react-router-dom';
import styled from 'styled-components';
import imgUrl from '@assets/logo.png';

type Props = {
  to: string;
};

export default function Logo({ to }: Props) {
  return (
    <Container to={to}>
      <img src={imgUrl} alt="logo_icon" />
    </Container>
  );
}

const Container = styled(Link)`
  height: 100%;
  cursor: pointer;
  img {
    height: 3.75rem;
  }
`;
