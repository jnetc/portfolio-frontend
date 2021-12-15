import { useEffect, useRef } from 'react';
// Hook
import { useContextMain } from '@Hooks/useContextMain';

const Notice = () => {
  const { notice, setNotify, setResponse } = useContextMain();
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (notice.status !== 'default') {
      const clear = setTimeout(() => {
        setNotify({ status: 'default', message: notice.message });
        setResponse({ status: 'default' });

        clearTimeout(clear);
      }, 3000);
    }
  }, [notice, setNotify, setResponse]);

  return (
    <>
      <p
        className={
          notice.status !== 'default' ? 'notice notice-show' : 'notice'
        }
        role="dialog"
        ref={ref}
      >
        {notice.message || ''}
      </p>
    </>
  );
};

export default Notice;
