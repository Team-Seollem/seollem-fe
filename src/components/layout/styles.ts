import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '@components/common';

export const Header = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  max-width: 40rem;
  padding: 0 1rem;
  height: 3.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 4px 6px rgb(32 33 36 / 10%);
`;

export const Menu = styled.div`
  display: flex;
  svg {
    cursor: pointer;
    margin: 0 0.4rem;
    padding: 0.6rem auto;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.color.gray02};
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
`;

export const HeaderButton = styled(Button)`
  margin: 0 0.4rem;
`;

export const DropdownMenuWrapper = styled.ul`
  background-color: white;
  width: 7rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const DropdownMenuItem = styled.div`
  padding: 0.5rem 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.color.gray04};
  }
`;

export const Main = styled.main`
  margin: 0 0.75rem 1.25rem 0.75rem;
  padding-top: 4.5rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
`;
