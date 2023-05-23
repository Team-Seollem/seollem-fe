import { Navigate } from 'react-router-dom';

import useLoginState from '@hooks/useLoginState';
import { PAGE_URL } from '@constants';
import { PublicHeader } from '@components/layout';
import * as S from '@components/layout/styles';

type Props = {
  children: React.ReactNode;
};

function PublicRoute({ children }: Props) {
  const { isLoggedIn } = useLoginState();
  if (isLoggedIn) return <Navigate to={PAGE_URL.LIBRARY} />;

  return (
    <>
      <PublicHeader />
      <S.Main>{children}</S.Main>
    </>
  );
}
export default PublicRoute;
