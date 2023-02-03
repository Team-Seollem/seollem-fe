import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import useLoginState from '@hooks/useLoginState';
import Header from './Header';
import GNB from './GNB';

export default function Layout() {
  const { isLoggedIn } = useLoginState();
  return (
    <>
      <Header />
      <SMain>
        <Outlet />
      </SMain>
      {isLoggedIn && <GNB />}
    </>
  );
}
const SMain = styled.main`
  margin: 0.9rem 0.75rem 1.25rem 0.75rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
`;
