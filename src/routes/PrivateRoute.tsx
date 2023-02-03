import { Navigate, Outlet } from 'react-router-dom';

import { PAGE_URL } from '@constants';
import { tokenRepository } from '@apis/index';
import { isValidToken } from '@utils';

function PrivateRoute() {
  const token = tokenRepository.getToken();

  if (!isValidToken(token)) return <Navigate to={PAGE_URL.SIGN_IN} />;

  return <Outlet />;
}
export default PrivateRoute;
