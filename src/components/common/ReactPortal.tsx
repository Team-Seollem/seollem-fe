import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const getWrapperElement = (wrapperId: string) => {
  if (document.getElementById(wrapperId)) {
    return document.getElementById(wrapperId) as HTMLDivElement;
  }
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

interface Props {
  children: React.ReactNode;
  wrapperId: string;
}

export default function ReactPortal({
  children,
  wrapperId = 'react-portal-root',
}: Props) {
  const [wrapperElement, setWrapperElement] = useState<HTMLDivElement | null>(
    null
  );

  useLayoutEffect(() => {
    setWrapperElement(getWrapperElement(wrapperId));

    return () => {
      getWrapperElement(wrapperId).remove();
    };
  }, [wrapperId]);

  return wrapperElement ? createPortal(children, wrapperElement) : null;
}
