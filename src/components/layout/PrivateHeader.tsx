import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { IoNotifications, IoMenu } from 'react-icons/io5';

import { PAGE_URL } from '@constants';
import { authService } from '@apis';
import { loginState } from '@state/atom';
import Dropdown from '@components/common/DropDown';
import styled from 'styled-components';
import * as S from './styles';
import Logo from './Logo';

export default function PrivateHeader() {
  const setIsLoggedIn = useSetRecoilState(loginState);
  const navigate = useNavigate();

  const handleMyPage = () => {
    navigate(PAGE_URL.MYPAGE);
  };

  const handleLogout = () => {
    authService.signOut();
    setIsLoggedIn(false);
    navigate(PAGE_URL.ROOT);
  };

  return (
    <S.Header>
      <Logo to={PAGE_URL.LIBRARY} />

      <S.Menu>
        <Dropdown target={<IoMenu />}>
          <S.DropdownMenuWrapper>
            <S.DropdownMenuItem onClick={handleMyPage}>
              마이 페이지
            </S.DropdownMenuItem>
            <S.DropdownMenuItem onClick={handleLogout}>
              로그아웃
            </S.DropdownMenuItem>
          </S.DropdownMenuWrapper>
        </Dropdown>
      </S.Menu>
    </S.Header>
  );
}
