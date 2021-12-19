import { LinksType } from '@Types';

export const LinkedIn = ({ url, cssClass }: LinksType) => {
  const labelUrl = url.split('//')[1];

  return (
    <a
      href={url}
      className={`link ${cssClass}`}
      role="button"
      target="_blank"
      rel="noreferrer"
      aria-label={`link to linkedin profile, ${labelUrl}`}
      title={`link to ${labelUrl} `}
    >
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 22 22"
        className="link__svg linkedin"
      >
        <path d="M3.006.732A2.42 2.42 0 0 0 .57 3.168c0 1.316 1.092 2.436 2.436 2.436a2.438 2.438 0 0 0 2.436-2.436A2.438 2.438 0 0 0 3.006.732Zm2.1 6.72h-4.2V21.06h4.2V7.452Z" />
        <path d="M12.324 21.06v-6.916c0-2.324.84-3.332 2.52-3.332 1.456 0 2.184.84 2.184 3.248v7h4.2v-7.7c0-4.48-1.596-6.244-5.04-6.244-1.736 0-3.22.812-3.976 2.184h-.056V7.452H8.124V21.06h4.2Z" />
      </svg>
    </a>
  );
};
