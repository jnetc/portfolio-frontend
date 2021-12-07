import { FC } from 'react';
import Image from 'next/image';
// Sanity Block text
import { urlFor } from '@Sanity/sanity';
// Types
import { CourseType } from '@Types';
// Components
import { ExternalLink } from '@LinkExternal';
import { Opiframe } from '@About/logos/Opiframe';
import { Udemy } from '@About/logos/Udemy';
import { Completed } from '@About/icons/Completed';
import { Studying } from '@About/icons/Studying';

export const Course: FC<{ data: CourseType }> = ({ data }) => {
  const isUdemy = data.course_href.match('udemy');
  // External image
  const imageUrl = urlFor(data.course_image).url() || '';

  return (
    <article className="course">
      {isUdemy ? <Udemy /> : <Opiframe />}
      {data.course_href && (
        <ExternalLink url={data.course_href} cssClass="course__link" />
      )}
      <div className="course__poster">
        <Image
          src={imageUrl}
          alt={data.course_name}
          layout="fill"
          objectFit="cover"
          quality={80}
          priority
        />
      </div>
      <h1 className="card-title course__name course-pad2">
        {data.course_name}
      </h1>
      <div className="course__complete course-pad2">
        {data.course_completed ? <Completed /> : <Studying />}

        <p className="course__complete-text">
          {data.course_completed
            ? `completed ${data.course_completed}`
            : `In the learning process`}
        </p>
      </div>
      <p className="paragraph course__desc course-pad2">{data.course_desc}</p>
      {data.certificate_href && (
        <a
          href={data.certificate_href}
          className="btn btn-course course-pad2"
          role="button"
          target="_blank"
          rel="noreferrer"
          aria-label="link to certificate page"
          title="link to certificate page"
        >
          show certificate
        </a>
      )}
    </article>
  );
};
