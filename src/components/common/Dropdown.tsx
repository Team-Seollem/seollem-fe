import { useState, useRef } from 'react';
import styled from 'styled-components';
import ReactPortal from './ReactPortal';

type Props = {
  target: React.ReactNode;
  children: React.ReactNode;
  offsetX?: number;
  offsetY?: number;
};

export default function Dropdown({
  target,
  children,
  offsetX = -90,
  offsetY = -5,
}: Props) {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const getCoordinates = () => {
    const element = targetRef.current;
    if (!element) {
      return { left: 0, top: 0 };
    }
    const targetRect = element.getBoundingClientRect();

    const left = targetRect.left + offsetX;
    const top = targetRect.bottom + offsetY;
    return { left, top };
  };

  const position = getCoordinates();
  return (
    <Wrapper onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
      <ButtonWrapper ref={targetRef}>{target}</ButtonWrapper>
      <ReactPortal wrapperId="dropdown-root">
        {isOpen && (
          <DropdownWrapper left={position.left} top={position.top}>
            {children}
          </DropdownWrapper>
        )}
      </ReactPortal>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const ButtonWrapper = styled.div`
  cursor: pointer;
`;

const DropdownWrapper = styled.div<{ top: number; left: number }>`
  position: fixed;
  z-index: 2;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
`;
