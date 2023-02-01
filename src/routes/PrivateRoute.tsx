import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { PAGE_URL } from '@constants';
import { loginState } from '@state/atom';

function PrivateRoute() {
  const [isLoggedIn] = useRecoilState(loginState);

  if (!isLoggedIn) return <Navigate to={PAGE_URL.SIGN_IN} />;

  return <Outlet />;
}
export default PrivateRoute;
