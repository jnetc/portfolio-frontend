import { LinksType } from '@Types';

export const StackOverflow = ({ url, cssClass }: LinksType) => {
  const labelUrl = url.split('//')[1];

  return (
    <a
      href={url}
      className={`link ${cssClass}`}
      role="button"
      target="_blank"
      rel="noreferrer"
      aria-label={`link to stackoverflow profile, ${labelUrl}`}
      title={`link to ${labelUrl} `}
    >
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 23 27"
        className="link__svg stackoverflow"
      >
        <path d="M2.232 16.633v7.944h18.24v-7.944" />
        <path d="M16.907 19.965H5.82m11.321-2.773L6.308 14.793m11.694-.28L7.962 9.739m11.577 2.306L11.06 4.916m10.53 5.125-6.616-8.898" />
      </svg>
    </a>
  );
};
