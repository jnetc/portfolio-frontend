import { LinksType } from '@Types';

export const GitHubLink = ({ url, cssClass }: LinksType) => {
  return (
    <a
      href={url}
      className={`link ${cssClass}`}
      role="button"
      target="_blank"
      rel="noreferrer"
      aria-label="link to github profile"
      title="link to github profile"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 23 23"
        className="link__svg github"
      >
        <path d="M11.5,0A11.6,11.6,0,0,0,0,11.69,11.66,11.66,0,0,0,8.61,23V20.31a6.06,6.06,0,0,1-1.32.13,2.82,2.82,0,0,1-2.67-1.61,4.14,4.14,0,0,0-1.61-2s-.29-.22-.19-.44.47-.31,1.19-.06a3.38,3.38,0,0,1,1.45,1.32s.82,1.67,3.18.7A2.87,2.87,0,0,1,9.14,17c-3-.78-5.1-3-5.1-5.62A5.1,5.1,0,0,1,5.28,8.12h0a3.86,3.86,0,0,1,.19-3.45,5.75,5.75,0,0,1,3.2,1.25,9.07,9.07,0,0,1,5.52,0c.55-.35,2.19-1.34,3.36-1.16A3.8,3.8,0,0,1,17.6,8.1a5.09,5.09,0,0,1,1.26,3.29c0,2.59-2.09,4.78-5,5.58a3,3,0,0,1,.56,1.73V23A11.66,11.66,0,0,0,23,11.69,11.6,11.6,0,0,0,11.5,0Z" />
      </svg>
    </a>
  );
};
