import { LinksType } from '@Types';

export const EmailLink = ({ url, cssClass }: LinksType) => {
  const labelUrl = url.split('mailto:')[1];
  return (
    <a
      href={url}
      className={`link ${cssClass}`}
      role="button"
      aria-label={labelUrl}
      title={labelUrl}
    >
      <svg viewBox="0 0 29 23" fill="none" className="link__svg email">
        <path
          d="M6.91193 5.76782L14.8289 11.7678L22.9119 5.76782M4.91193 21.6209H24.9119C26.5688 21.6209 27.9119 20.2778 27.9119 18.6209V4.62091C27.9119 2.96406 26.5688 1.62091 24.9119 1.62091H4.91193C3.25507 1.62091 1.91193 2.96406 1.91193 4.62091V18.6209C1.91193 20.2778 3.25507 21.6209 4.91193 21.6209Z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </a>
  );
};
