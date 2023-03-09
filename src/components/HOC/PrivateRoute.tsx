import { Navigate, Outlet } from 'react-router-dom';

import useLoginState from '@hooks/useLoginState';
import { PAGE_URL } from '@constants';
import { PrivateHeader, GNB } from '@components/layout';
import * as S from '@components/layout/styles';

function PrivateRoute() {
  const { isLoggedIn } = useLoginState();
  if (!isLoggedIn) return <Navigate to={PAGE_URL.SIGN_IN} />;

  return (
    <>
      <PrivateHeader />
      <S.Main>
        <Outlet />
      </S.Main>
      <GNB />
    </>
  );
}
export default PrivateRoute;
