import style from '../skills.module.css';

export const WebDesign = () => {
  return (
    <div className={style.icon}>
      <svg
        viewBox="0 0 111 82"
        fill="none"
        className={`${style.svg} ${style.webdesign}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="27.6042"
          y1="66.2212"
          x2="67.6754"
          y2="66.2212"
          className={style.stroke_30}
          strokeLinecap="round"
        />
        <rect
          x="2.12732"
          y="1.75513"
          width="91.025"
          height="54.6733"
          rx="3"
          className={style.stroke_30}
        />
        <rect
          x="81.1964"
          y="36.4043"
          width="27.768"
          height="43.681"
          rx="2"
          className={style.phone_bg}
        />
        <circle cx="95.0804" cy="69.856" r="2.83426" className={style.svg_bg} />
      </svg>
    </div>
  );
};
