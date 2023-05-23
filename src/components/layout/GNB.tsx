import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IoLibraryOutline } from 'react-icons/io5';
import { RiMedalLine } from 'react-icons/ri';
import {
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineUsers,
} from 'react-icons/hi';
import { PAGE_URL } from '@constants';

export default function GNB() {
  return (
    <SNav>
      <NavButton to={PAGE_URL.LIBRARY}>
        <IoLibraryOutline />
        서재
      </NavButton>
      <NavButton to={PAGE_URL.RECOMMENDEDBOOKS}>
        <RiMedalLine />
        추천책
      </NavButton>
      <NavButton to={PAGE_URL.MEMO_BOOKS}>
        <HiOutlineBookOpen />
        작은 책
      </NavButton>
      <NavButton to={PAGE_URL.MYSTAT}>
        <HiOutlineCalendar />
        통계
      </NavButton>
      <NavButton to={PAGE_URL.COMMUNITY}>
        <HiOutlineUsers />
        명예의전당
      </NavButton>
    </SNav>
  );
}
const SNav = styled.nav`
  position: fixed;
  bottom: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.color.white};
  padding: 0.5rem 2rem;
  width: 100%;
  max-width: 40rem;
  box-shadow: 0px -2px 5px -1px rgb(32 33 36 / 10%);
  display: flex;
  align-items: row;
  justify-content: space-between;
`;
const NavButton = styled(NavLink)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.gray02};
  font-family: 'Pretendard';
  font-weight: 800;
  padding: 0.4rem 0.6rem;
  width: 4.5rem;
  white-space: nowrap;
  text-decoration: none;
  border-radius: 1rem;
  > svg {
    font-size: 1.7rem;
    margin-bottom: 0.3rem;
  }
  &.active {
    color: ${({ theme }) => theme.color.gray01};
  }
`;
