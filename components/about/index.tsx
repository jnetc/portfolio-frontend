import { FC } from 'react';
// Components
import Anchor from '@Anchor';
import Separator from '@Separator';
import { Story } from '@About/story/Story';
import { Education } from '@About/education/Education';

const About: FC = () => {
  return (
    <>
      <Anchor name="about" hash="#4" />
      <Story />
      <Separator name="about" />
      <Education />
    </>
  );
};

export default About;
