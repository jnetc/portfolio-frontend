// Components
import Anchor from '@Anchor';
import Separator from '@Separator';
import { Story } from '@About/story/Story';
import { Courses } from '@About/courses/Courses';

const About = () => {
  return (
    <>
      <Anchor name="about" hash="#4" />
      <Story />
      <Separator name="about" />
      <Courses />
    </>
  );
};

export default About;
