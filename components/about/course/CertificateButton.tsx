import { useStore } from '@Store';
// Localization
import { sertificateButton } from '@Languages';

export const SertificateButton = ({ href }: { href: string }) => {
  const { lang } = useStore();
  return (
    <a
      href={href}
      className="btn btn-course course-pad2"
      role="button"
      target="_blank"
      rel="noreferrer"
      aria-label="link to certificate page"
      title="link to certificate page"
    >
      {sertificateButton[lang]}
    </a>
  );
};
