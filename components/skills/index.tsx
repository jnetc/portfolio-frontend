import { FC } from 'react';
// Hook
import { useStore } from '@Store';
// Components
import Anchor from '@Anchor';
import { Skill } from '@Skills/skill/Skill';

const Skills: FC = () => {
  const { context } = useStore();

  const skills = context?.skills.map(s => {
    return <Skill key={s._id} data={s} />;
  });

  return (
    <>
      <Anchor anchor="skills" hash="#3" />
      <section className="skills  mob-right-pad">{skills}</section>
    </>
  );
};

export default Skills;
