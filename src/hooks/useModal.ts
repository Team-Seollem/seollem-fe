import { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isOpen);
  };

  return { isOpen, toggle };
};

export default useModal;
