// Hook
import { useContextStore } from '@Hooks/useContextStore';
// Components
import Anchor from '@Anchor';
import { Skill } from '@Skills/Skill';
// Style
import style from './skills.module.css';

const Skills = () => {
  const { context } = useContextStore();

  const skills = context?.skills.map(s => {
    return <Skill key={s._id} data={s} />;
  });

  return (
    <>
      <Anchor name="skills" hash="#3" />
      <section className={`${style.module} mob-right-pad grid-12`}>
        {skills}
      </section>
    </>
  );
};

export default Skills;
