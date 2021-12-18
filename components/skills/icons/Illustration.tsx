import style from '../skills.module.css';
export const Illustation = () => {
  return (
    <div className={style.icon}>
      <svg
        viewBox="0 0 109 94"
        fill="none"
        className={`${style.svg} ${style.illustration}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="27.7007"
          width="7"
          height="7"
          rx="1"
          className={style.stroke_60}
        />
        <rect
          x="101.613"
          y="15.7183"
          width="7"
          height="7"
          rx="1"
          className={style.stroke_60}
        />
        <rect
          x="50.7603"
          y="22.3892"
          width="7"
          height="7"
          rx="1"
          className={style.svg_bg}
        />
        <path
          d="M6.77972 28.5889C6.77972 28.5889 32.6853 7.34431 54.3564 26.0618C76.0275 44.7792 101.983 21.9133 101.983 21.9133"
          strokeOpacity="0.6"
          strokeMiterlimit="3.8637"
          strokeLinecap="round"
          strokeLinejoin="bevel"
          strokeDasharray="6 6"
          className={style.stroke_60}
        />
        <path
          d="M32.1375 6.61816L75.38 44.1316"
          strokeMiterlimit="3.8637"
          strokeLinecap="round"
          strokeLinejoin="bevel"
          className={style.stroke_60}
        />
        <path
          d="M41.3753 66.1883L54.5907 34.584L67.8131 66.1883V69.5348L62.7351 83.6894H46.6512L41.3752 69.4494L41.3753 66.1883Z"
          strokeLinejoin="round"
        />
        <circle cx="54.6219" cy="65.3047" r="2.75" />
        <path d="M54.6219 38.3203L54.6219 62.5545" strokeLinecap="square" />
        <rect x="45.3474" y="88.3354" width="18.4723" height="5.41498" rx="1" />
        <circle cx="29.5266" cy="4.11087" r="3.04739" />
        <circle cx="78.4273" cy="47.1787" r="3.04739" />
      </svg>
    </div>
  );
};
