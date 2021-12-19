// Components
import { Title } from '@Portfolio/Title';
import { Description } from '@Portfolio/Description';
import { Frontend } from '@Skills/icons/FrontEnd';
import { Fullstack } from '@Skills/icons/Fullstack';
import { Illustation } from '@Skills/icons/Illustration';
import { ThreeDGraphics } from '@Skills/icons/ThreeDGraphics';
import { Animation } from '@Skills/icons/Animation';
import { WebDesign } from '@Skills/icons/WebDesign';
// Type
import { SkillType } from '@Types';
// Style
import style from './skills.module.css';

export const Skill = ({ data }: { data: SkillType }) => {
  return (
    <article className={style.skill}>
      {data.skill_id === 'frontend' && <Frontend />}
      {data.skill_id === 'illustration' && <Illustation />}
      {data.skill_id === 'fullstack' && <Fullstack />}
      {data.skill_id === '3dgraphics' && <ThreeDGraphics />}
      {data.skill_id === 'animation' && <Animation />}
      {data.skill_id === 'webdesign' && <WebDesign />}

      <Title title={data.skill_name} />
      <Description desc={data.skill_desc} />
      <span className={style.arrow} />
    </article>
  );
};
