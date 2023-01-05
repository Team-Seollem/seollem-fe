import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
  return (
    <>
      <Header />
      <SMain>
        <Outlet />
      </SMain>
      {/* GNB Component  */}
    </>
  );
}
const SMain = styled.main`
  margin: 0.9rem 0.75rem 1.25rem 0.75rem;
  display: flex;
  flex-direction: column;
`;
