import type { CourseType } from '@Types';
// Components
import { ExternalLink } from '@Links/External';
import { Opiframe } from '@About/courses/logos/Opiframe';
import { Udemy } from '@About/courses/logos/Udemy';
import { Completed } from '@About/courses/icons/Completed';
import { Studying } from '@About/courses/icons/Studying';
import { CourseButton } from './CourseButton';
import Img from '@Img';
// Style
import style from './course.module.css';

export const Course = ({ data }: { data: CourseType }) => {
  const isUdemy = data.course_href.match('udemy');

  return (
    <article className={style.module}>
      {isUdemy ? <Udemy /> : <Opiframe />}
      {data.course_href && <ExternalLink url={data.course_href} cssClass={style.link} />}
      <div className={style.poster}>
        <Img pathImage={data.course_image} objectFit="cover" alt={data.course_name} />
      </div>
      <h1 className={`card-title ${style.name}`} aria-hidden>
        {data.course_name}
      </h1>
      <div className={`${style.complete}`}>
        {data.course_completed ? <Completed /> : <Studying />}

        <p className={`${style.complete_text}`}>
          {data.course_completed ? `completed ${data.course_completed}` : `In the learning process`}
        </p>
      </div>
      <p className={`paragraph ${style.desc}`} aria-hidden>
        {data.course_desc}
      </p>
      {data.certificate_href && <CourseButton href={data.certificate_href} />}
    </article>
  );
};
