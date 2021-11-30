import { FC } from 'react';
// Components
import Anchor from '@Anchor';
import Separator from '@Separator';
import { Story } from '@About/story/Story';
import { Education } from '@About/education/Education';

const About: FC = () => {
  return (
    <>
      <Anchor anchor="about" hash="#4" />
      <Story />
      <Separator separator="about" />
      <Education />
    </>
  );
};

export default About;
