import { useRef, useEffect } from 'react';
// Hook
import { useStore } from '@Store';

export const EmailFormSVG = () => {
  const { toggleModal } = useStore();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.addEventListener('animationend', ev => {
      if (ev.animationName !== 'letter') return;
      toggleModal({ show: false });
    });
  }, [toggleModal]);

  return (
    <div className="letter" ref={ref}>
      <svg fill="none" viewBox="0 0 160 147" xmlns="http://www.w3.org/2000/svg">
        <path
          className="letter-open fill-beige-dark"
          d="M83.286 2.889a5 5 0 0 0-6.025 0L8.604 54.724h143.339L83.286 2.889Z"
        />
        <path
          className="fill-beige-dark"
          d="M8.684 54.724h143.289v86.666a5 5 0 0 1-5 5H13.683a5 5 0 0 1-5-5V54.724Z"
        />
        <g className="letter-list">
          <rect
            className="fill-white"
            x="23.016"
            y="18.213"
            width="114.625"
            height="63.813"
            rx="5"
          />
          <path
            className="stroke-grey-dark"
            d="M32.438 37.467h64.946M32.438 52.519h84.513M32.438 67.57h34.935m17.751 0h22.317"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </g>
        <path
          className="fill-beige"
          d="m8.684 54.724 71.644 31.963 71.645-31.963v86.666a5 5 0 0 1-5 5H13.683a5 5 0 0 1-5-5V54.724Z"
        />
        <path
          className="fill-beige-dark"
          d="M76.838 72.972a5 5 0 0 1 6.978.003l66.502 64.835c3.211 3.131.995 8.58-3.491 8.58H13.732c-4.487 0-6.703-5.452-3.488-8.582l66.594-64.836Z"
        />
        <path
          className="fill-beige"
          d="M76.976 77.478a5 5 0 0 1 6.704 0l66.632 60.202c3.397 3.069 1.226 8.71-3.352 8.71H13.69c-4.578 0-6.749-5.641-3.352-8.71l66.638-60.203Z"
        />
        <path
          className="fill-beige"
          d="M76.976 77.478a5 5 0 0 1 6.704 0l66.632 60.202c3.397 3.069 1.226 8.71-3.352 8.71H13.69c-4.578 0-6.749-5.641-3.352-8.71l66.638-60.203Z"
        />
        <g className="letter-close">
          <path
            className="fill-beige-dark"
            d="M83.494 112.205a5 5 0 0 1-6.441 0L8.604 54.568h143.339l-68.449 57.637Z"
          />
          <path
            className="fill-beige-light"
            d="M83.268 105.936a5 5 0 0 1-5.99 0L8.605 54.568h143.339l-68.675 51.368Z"
          />
        </g>
      </svg>
    </div>
  );
};
