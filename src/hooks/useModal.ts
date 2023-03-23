import { useState } from 'react';

export default function useModal() {
  const [isOpen, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isOpen);
  };

  return { isOpen, toggle };
}
