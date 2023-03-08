/* eslint-disable consistent-return */
import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (option: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersect, setIsIntersect] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsIntersect(entry.isIntersecting);
    }, option);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, option]);

  return { ref, isIntersect };
};

export default useIntersectionObserver;
