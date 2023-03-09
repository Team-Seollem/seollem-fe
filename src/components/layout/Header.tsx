import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '@components/common';

export const Header = styled.header`
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

export const Menu = styled.div`
  display: flex;
  svg {
    cursor: pointer;
    margin: 0 0.4rem;
    padding: 0.6rem auto;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
`;

export const HeaderButton = styled(Button)`
  margin: 0 0.4rem;
`;
