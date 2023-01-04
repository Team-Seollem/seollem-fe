import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import imgUrl from '@assets/logo.png';
import { IoNotifications, IoPerson, IoLogOutOutline } from 'react-icons/io5';
import { PAGEURL } from '@constants/index';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <SHeader>
      <Logo to={PAGEURL.ROOT}>
        <img src={imgUrl} alt="logo_icon" />
      </Logo>
      {isLoggedIn && (
        <SMenu>
          <IoNotifications />
          <Link to={PAGEURL.MYPAGE}>
            <IoPerson />
          </Link>
          <IoLogOutOutline />
        </SMenu>
      )}
      {!isLoggedIn && (
        <SMenu>
          <Link to={PAGEURL.SIGNIN}>
            <button type="button">로그인</button>
          </Link>
          <Link to={PAGEURL.SIGNUP}>
            <button type="button">회원가입</button>
          </Link>
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
  button {
    margin: 0 0.4rem;
  }
  svg {
    cursor: pointer;
    margin: 0 0.4rem;
    padding: 0.6rem auto;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.color.mint};
  }
`;
