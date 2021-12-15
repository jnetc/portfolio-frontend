import { FC } from 'react';
// Components
import { Course } from '@About/course/Course';
import { ScrollArea } from '@ScrollArea';
// Hook
import { useContextStore } from '@Hooks/useContextStore';

export const Education: FC = () => {
  const { context } = useContextStore();

  const courses = context?.courses
    .map(crs => <Course key={crs._id} data={crs} />)
    .sort((a, b) => {
      let dateA = Date.parse(a.props.data.course_completed);
      let dateB = Date.parse(b.props.data.course_completed);
      // If the course is studying
      if (!a.props.data.course_completed) {
        dateA = new Date().getTime();
      }
      if (!b.props.data.course_completed) {
        dateB = new Date().getTime();
      }

      if (dateA > dateB) return -1;
      return 1;
    });

  return <ScrollArea>{courses}</ScrollArea>;
};
