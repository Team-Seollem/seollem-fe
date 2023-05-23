import { Navigate } from 'react-router-dom';

import useLoginState from '@hooks/useLoginState';
import { PAGE_URL } from '@constants';
import { PrivateHeader, GNB } from '@components/layout';
import * as S from '@components/layout/styles';

type Props = {
  children: React.ReactNode;
};

function PrivateRoute({ children }: Props) {
  const { isLoggedIn } = useLoginState();
  if (!isLoggedIn) return <Navigate to={PAGE_URL.SIGN_IN} />;

  return (
    <>
      <PrivateHeader />
      <S.Main>{children}</S.Main>
      <GNB />
    </>
  );
}
export default PrivateRoute;
