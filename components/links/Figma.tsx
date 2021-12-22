import { LinksType } from '@Types';

export const FigmaLink = ({ url, cssClass }: LinksType) => {
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
      <svg fill="none" viewBox="0 0 18 26" className="link__svg figma">
        <rect
          x="1.407"
          y="1.886"
          width="15.186"
          height="7.593"
          rx="3.796"
          strokeWidth="2"
        />
        <rect
          x="1.407"
          y="9.478"
          width="15.186"
          height="7.593"
          rx="3.796"
          strokeWidth="2"
        />
        <path
          d="M9 17.112H5.161a3.754 3.754 0 0 0-3.754 3.754c0 2.074 1.702 3.755 3.775 3.755C7.28 24.62 9 22.92 9 20.823v-3.712Zm0 0V1.38"
          strokeWidth="2"
        />
      </svg>
    </a>
  );
};
