import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import imgUrl from '@assets/logo.png';
import { IoNotifications, IoPerson, IoLogOutOutline } from 'react-icons/io5';
import { Button } from '@components/common';
import { PAGE_URL } from '@constants';
import { authService } from '@apis';
import { loginState } from '@state/atom';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);

  const navigate = useNavigate();
  const handleLogout = () => {
    authService.signOut();
    setIsLoggedIn(false);
    navigate(PAGE_URL.ROOT);
  };

  return (
    <SHeader>
      <Logo to={PAGE_URL.ROOT}>
        <img src={imgUrl} alt="logo_icon" />
      </Logo>

      {isLoggedIn && (
        <SMenu>
          <IoNotifications />
          <SLink to={PAGE_URL.MYPAGE}>
            <IoPerson />
          </SLink>
          <IoLogOutOutline onClick={handleLogout} />
        </SMenu>
      )}

      {!isLoggedIn && (
        <SMenu>
          <SLink to={PAGE_URL.SIGN_IN}>
            <HeaderButton type="button" styleType="neutral" size="small">
              로그인
            </HeaderButton>
          </SLink>
          <SLink to={PAGE_URL.SIGN_UP}>
            <HeaderButton type="button" styleType="solidPositive" size="small">
              회원가입
            </HeaderButton>
          </SLink>
        </SMenu>
      )}
    </SHeader>
  );
}
const SHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 0 1rem 0 0.6rem;
  height: 3.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 4px 6px rgb(32 33 36 / 10%);
  min-width: 375px;
`;

const Logo = styled(Link)`
  height: 100%;
  cursor: pointer;
  img {
    height: 3.75rem;
  }
`;

const SMenu = styled.div`
  display: flex;
  svg {
    cursor: pointer;
    margin: 0 0.4rem;
    padding: 0.6rem auto;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.color.primary};
  }
`;

const SLink = styled(Link)`
  text-decoration: none;
`;

const HeaderButton = styled(Button)`
  margin: 0 0.4rem;
`;
