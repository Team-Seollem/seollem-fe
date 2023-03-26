import { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import ReactPortal from './ReactPortal';

type Props = {
  children: React.ReactNode;
  content: string;
};

export default function Tooltip({ children, content }: Props) {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const getCoordinates = useCallback(() => {
    const element = targetRef.current;
    if (!element) {
      return { x: 0, y: 0 };
    }
    const targetRect = element.getBoundingClientRect();

    const x = targetRect.left + targetRect.width / 2;
    const y = targetRect.top + targetRect.height / 2;
    return { x, y };
  }, [targetRef]);

  const position = getCoordinates();
  return (
    <Wrapper
      ref={targetRef}
      onMouseEnter={toggleVisibility}
      onMouseLeave={toggleVisibility}
    >
      {children}
      <ReactPortal wrapperId="tooltip-root">
        {isVisible && (
          <Text left={position.x} top={position.y}>
            {content}
          </Text>
        )}
      </ReactPortal>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const Text = styled.p<{ top: number; left: number }>`
  position: absolute;
  z-index: 1;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  padding: 0.3rem;
  border-radius: 0.3rem;
  width: 4rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  background-color: ${({ theme }) => theme.color.gray01};
  color: ${({ theme }) => theme.color.white};
`;
