import { useState, useEffect } from 'react';
export const useResize = () => {
  const [resize, setResize] = useState(0);

  useEffect(() => {
    const resize = () => {
      const getWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      setResize(getWidth);
    };
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return { resize };
};
