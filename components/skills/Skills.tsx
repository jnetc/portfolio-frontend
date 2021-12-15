import { FC } from 'react';
// Hook
import { useContextStore } from '@Hooks/useContextStore';
// Components
import Anchor from '@Anchor';
import { Skill } from '@Skills/skill/Skill';

const Skills: FC = () => {
  const { context } = useContextStore();

  const skills = context?.skills.map(s => {
    return <Skill key={s._id} data={s} />;
  });

  return (
    <>
      <Anchor name="skills" hash="#3" />
      <section className="skills  mob-right-pad grid-12">{skills}</section>
    </>
  );
};

export default Skills;
