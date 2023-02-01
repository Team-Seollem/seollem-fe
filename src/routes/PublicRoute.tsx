import { Outlet, Navigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { loginState } from 'state/atom';
import { PAGE_URL } from '../constants/path';

function PublicRoute() {
  const [isLoggedIn] = useRecoilState(loginState);

  if (isLoggedIn) return <Navigate to={PAGE_URL.LIBRARY} />;
  return <Outlet />;
}
export default PublicRoute;
