import { useRouter } from 'next/router';

export const LangButton = ({ path, lang }: { path: string; lang: string }) => {
  const { locale, push } = useRouter();
  return (
    <button
      onClick={() => {
        push(`/${path}`, `/${path}`, { locale: lang });
      }}
      className={locale === lang ? 'active' : undefined}
    >
      {lang}
    </button>
  );
};
