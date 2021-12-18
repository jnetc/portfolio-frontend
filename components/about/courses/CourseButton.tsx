import { useContextStore } from '@Hooks/useContextStore';
// Localization
import { courseButton } from '@Languages';
// Style
import style from './course.module.css';

export const CourseButton = ({ href }: { href: string }) => {
  const { lang } = useContextStore();
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
