import { LinksType } from '@Types';

export const ExternalLink = ({ url, cssClass }: LinksType) => {
  const labelUrl = url.split('//')[1];

  return (
    <a
      href={url}
      className={`link ${cssClass}`}
      role="button"
      target="_blank"
      rel="noreferrer"
      aria-label={`link to ${labelUrl}`}
      title={`${labelUrl}`}
    >
      <svg viewBox="0 0 26 26" fill="none" className="link__svg external">
        <path
          d="M19.9691 15.5964V21.6931C19.9691 23.3499 18.626 24.6931 16.9691 24.6931H4.10266C2.44581 24.6931 1.10266 23.3499 1.10266 21.6931V7.98384C1.10266 6.32699 2.44581 4.98384 4.10266 4.98384H11.1014M9.78152 16.6553L24.1027 1.69446M24.1027 1.69446V9.33949M24.1027 1.69446H16.7954"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </svg>
    </a>
  );
};
