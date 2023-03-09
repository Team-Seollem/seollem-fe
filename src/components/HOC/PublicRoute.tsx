import { tokenRepository } from '@apis/index';
import { isValidToken } from '@utils';
import { Outlet, Navigate } from 'react-router-dom';

import { PAGE_URL } from '../../constants/path';

function PublicRoute() {
  const token = tokenRepository.getToken();

  if (isValidToken(token)) return <Navigate to={PAGE_URL.LIBRARY} />;
  return <Outlet />;
}
export default PublicRoute;
