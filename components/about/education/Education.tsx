import { FC } from 'react';
// Components
// import { Cource } from '@About/course/Course';
// Hook
import { useStore } from '@Store';
// Types
// import { SanitySerializer } from '@Types';

export const Education: FC = () => {
  const { context } = useStore();

  console.log(context?.courses);

  return <section>Education</section>;
};
