import style from '../skills.module.css';

export const Animation = () => {
  return (
    <div className={style.icon}>
      <svg
        viewBox="0 0 110 85"
        fill="none"
        className={`${style.svg} ${style.animation}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="22.3299"
          cy="62.673"
          r="20.5505"
          className={style.stroke_10}
        />
        <circle
          cx="26.1381"
          cy="51.5378"
          r="20.5505"
          className={style.stroke_10}
        />
        <circle
          cx="32.8815"
          cy="40.6225"
          r="20.5505"
          className={style.stroke_30}
        />
        <circle
          cx="39.912"
          cy="30.62"
          r="20.5505"
          className={style.stroke_30}
        />
        <circle
          cx="51.5118"
          cy="22.1305"
          r="20.5505"
          className={style.stroke_60}
        />
        <circle
          cx="65.3991"
          cy="25.3398"
          r="20.5505"
          className={style.stroke_80}
        />
        <circle cx="76.9823" cy="35.2724" r="20.5505" />
        <circle cx="87.4496" cy="47.2321" r="20.5505" />
      </svg>
    </div>
  );
};
