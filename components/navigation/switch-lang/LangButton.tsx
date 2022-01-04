import { useRouter } from 'next/router';

export const LangButton = ({ path, lang }: { path: string; lang: string }) => {
  const { locale, push } = useRouter();
  return (
    <div
      onClick={() => {
        push(`/${path}`, `/${path}`, { locale: lang });
      }}
    >
      <span className={locale === lang ? 'active' : undefined}>{lang}</span>
    </div>
  );
};
