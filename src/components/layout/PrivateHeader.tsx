import { useNavigate } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';

import { PAGE_URL } from '@constants';
import { Dropdown } from '@components/common';
import * as S from './styles';
import Logo from './Logo';
import useLogout from './hook/useLogout';

export default function PrivateHeader() {
  const navigate = useNavigate();
  const logout = useLogout();

  const handleMyPage = () => {
    navigate(PAGE_URL.MYPAGE);
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
            <S.DropdownMenuItem onClick={logout}>로그아웃</S.DropdownMenuItem>
          </S.DropdownMenuWrapper>
        </Dropdown>
      </S.Menu>
    </S.Header>
  );
}
