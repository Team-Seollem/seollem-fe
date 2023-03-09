import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { IoNotifications, IoPerson, IoLogOutOutline } from 'react-icons/io5';

import { PAGE_URL } from '@constants';
import { authService } from '@apis';
import { loginState } from '@state/atom';
import * as S from './styles';
import Logo from './Logo';

export default function PrivateHeader() {
  const setIsLoggedIn = useSetRecoilState(loginState);
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.signOut();
    setIsLoggedIn(false);
    navigate(PAGE_URL.ROOT);
  };

  return (
    <S.Header>
      <Logo to={PAGE_URL.LIBRARY} />

      <S.Menu>
        <IoNotifications />
        <S.MenuLink to={PAGE_URL.MYPAGE}>
          <IoPerson />
        </S.MenuLink>
        <IoLogOutOutline onClick={handleLogout} />
      </S.Menu>
    </S.Header>
  );
}
