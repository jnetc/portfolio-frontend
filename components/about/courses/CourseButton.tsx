import { useContextLanguage } from '@Hooks/useContextLanguage';
// Localization
import { courseButton } from '@Helpers/localization';
// Style
import style from './course.module.css';

export const CourseButton = ({ href }: { href: string }) => {
  const { lang } = useContextLanguage();
  return (
    <a
      href={href}
      className={`btn ${style.btn_course}`}
      role="button"
      target="_blank"
      rel="noreferrer"
      aria-label="link to certificate page"
      title="link to certificate page"
    >
      {courseButton[lang]}
    </a>
  );
};
