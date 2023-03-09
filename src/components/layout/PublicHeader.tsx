import { PAGE_URL } from '@constants';
import * as S from './Header';
import Logo from './Logo';

export default function PublicHeader() {
  return (
    <S.Header>
      <Logo to={PAGE_URL.ROOT} />

      <S.Menu>
        <S.MenuLink to={PAGE_URL.SIGN_IN}>
          <S.HeaderButton type="button" styleType="neutral" size="small">
            로그인
          </S.HeaderButton>
        </S.MenuLink>
        <S.MenuLink to={PAGE_URL.SIGN_UP}>
          <S.HeaderButton type="button" styleType="solidPositive" size="small">
            회원가입
          </S.HeaderButton>
        </S.MenuLink>
      </S.Menu>
    </S.Header>
  );
}
