import styled from 'styled-components';
import { Button } from '@components/common';
import { IoLibraryOutline } from 'react-icons/io5';
import { RiMedalLine } from 'react-icons/ri';
import {
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineChatAlt2,
} from 'react-icons/hi';

export default function GNB() {
  return (
    <SNav>
      <NavButton styleType="ghost" size="small">
        <IoLibraryOutline />
        서재
      </NavButton>
      <NavButton styleType="ghost" size="small">
        <RiMedalLine />
        추천책
      </NavButton>
      <NavButton styleType="ghost" size="small">
        <HiOutlineBookOpen />
        작은 책
      </NavButton>
      <NavButton styleType="ghost" size="small">
        <HiOutlineCalendar />
        통계
      </NavButton>
      <NavButton styleType="ghost" size="small">
        <HiOutlineChatAlt2 />
        커뮤니티
      </NavButton>
    </SNav>
  );
}
const SNav = styled.nav`
  position: fixed;
  bottom: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.color.white};

  padding: 0.5rem 3rem;
  width: 100%;
  max-width: 40rem;
  min-width: 375px;
  box-shadow: 0px -2px 5px -1px rgb(32 33 36 / 10%);
  display: flex;
  align-items: row;
  justify-content: space-between;
`;
const NavButton = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.color.gray01};
  > svg {
    font-size: 1.7rem;
    margin-bottom: 0.2rem;
  }
`;

/**
 * 구현 사항
 * - 하단에 고정
 * - privateRoute 하위의 모든 페이지에서 보여줌.. layout- isLoggedIn 상태 이용 ✅
 * - NavButton=> link to ,아이콘 + 메뉴명  ⇒ 컴포넌트화 필요하지 않을까?
 * - 서재, 추천책, 작은책, 통계, 커뮤니티
 * - 메뉴가 선택됐을때 (active) ui 변화
 */
