import { FC } from 'react';

export const ThemeIcon: FC<{ theme: boolean | null }> = ({ theme }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      id="theme"
      className={theme ? `moon` : undefined}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="16" y1="2" x2="16" y2="10" id="0" />
      <line x1="26" y1="6" x2="20" y2="12" id="45" />
      <line x1="30" y1="16" x2="23" y2="16" id="90" />
      <line x1="26" y1="26" x2="19" y2="19" id="135" />
      <line x1="16" y1="30" x2="16" y2="23" id="180" />
      <line x1="6" y1="26" x2="13" y2="19" id="225" />
      <line x1="2" y1="16" x2="10" y2="16" id="270" />
      <line x1="6" y1="6" x2="13" y2="13" id="315" />
      <mask id="mask">
        <circle id="circle-mask" cx="16" cy="16" r="8" />
        <circle id="half_moon" cx="16" cy="16" r="8" />
      </mask>
      <circle id="sun" cx="16" cy="16" r="8" mask="url(#mask)" />
    </svg>
  );
};
