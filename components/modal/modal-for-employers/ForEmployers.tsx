// Style
import style from '@Modal/modal.module.css';
import employers from './employers.module.css';

export const ForEmployersSVG = () => {
  return (
    <div className={employers.svg}>
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 145 152">
        <path
          d="m24.187 115.528 29.01-11.973-.785 1.742a8 8 0 0 0 1.228 8.509l13.665 15.877a8.001 8.001 0 0 1-.845 11.283l-3.565 3.069a8 8 0 0 1-11.277-.839l-21.186-24.565a8.004 8.004 0 0 0-4.005-2.508l-2.24-.595Z"
          className={style.fill_beige_dark}
        />
        <path
          d="M7.878 106.943c3.817 7.909 10.273 12.698 14.42 10.696l22.278-7.585L30.4 76.7 8.475 88.999C4.328 91 4.06 99.034 7.878 106.943Z"
          className={style.fill_grey_dark}
        />
        <path
          d="M30.927 76.282c16.77-13.739 19.665-19.935 24.783-27.95 1.482 18.79 30.391 60.795 30.391 60.795-14.547-6.088-33.242-2.045-40.358.694-12.257 3.636-24.514-27.613-14.816-33.54Z"
          className={style.fill_beige}
        />
        <ellipse
          cx="92.139"
          cy="67.872"
          rx="29.013"
          ry="60.576"
          transform="rotate(-26.202 92.139 67.872)"
          className={style.fill_grey_dark}
        />
        <ellipse
          cx="92.385"
          cy="68.049"
          rx="23.132"
          ry="53.437"
          transform="rotate(-26.202 92.385 68.049)"
          className={style.fill_beige_light}
        />
        <path
          d="m86.054 60.168-19.137 7.19s1.056 3.604 5.118 11.698c4.062 8.094 6.474 11.313 6.474 11.313l16.994-11.313-9.449-18.888Z"
          className={style.fill_beige_dark}
        />
        <path
          d="M93.675 68.19c1.175 2.388 1.687 4.711 1.646 6.483-.043 1.882-.653 2.57-1.01 2.746-.357.176-1.274.239-2.792-.875-1.429-1.049-2.957-2.872-4.133-5.26-1.175-2.388-1.687-4.712-1.646-6.484.043-1.882.653-2.57 1.01-2.746.356-.176 1.274-.239 2.791.875 1.43 1.049 2.958 2.872 4.134 5.26Z"
          className={`${style.stroke_grey_dark} ${style.fill_beige}`}
          strokeWidth="4"
        />
      </svg>
    </div>
  );
};
