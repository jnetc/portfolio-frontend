import { FC } from 'react';
// Types
import { CourseType } from '@Types';
// Components
import { ExternalLink } from '@Links/External';
import { Opiframe } from '@About/logos/Opiframe';
import { Udemy } from '@About/logos/Udemy';
import { Completed } from '@About/icons/Completed';
import { Studying } from '@About/icons/Studying';
import { SertificateButton } from './CertificateButton';
import Img from '@Img';

export const Course: FC<{ data: CourseType }> = ({ data }) => {
  const isUdemy = data.course_href.match('udemy');

  return (
    <article className="course">
      {isUdemy ? <Udemy /> : <Opiframe />}
      {data.course_href && (
        <ExternalLink url={data.course_href} cssClass="course__link" />
      )}
      <div className="course__poster">
        <Img
          pathImage={data.course_image}
          objectFit="cover"
          alt={data.course_name}
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
        <SertificateButton href={data.certificate_href} />
      )}
    </article>
  );
};
