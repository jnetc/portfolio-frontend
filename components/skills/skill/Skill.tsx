import { FC } from 'react';
// Components
import { Title } from '@Portfolio/title/Title';
import { Description } from '@Portfolio/description/Description';
import { Frontend } from '@Skills/icons/FrontEnd';
import { Fullstack } from '@Skills/icons/Fullstack';
import { Illustation } from '@Skills/icons/Illustration';
import { ThreeDGraphics } from '@Skills/icons/ThreeDGraphics';
import { Animation } from '@Skills/icons/Animation';
import { WebDesign } from '@Skills/icons/WebDesign';
// Type
import { SkillType } from '@Types';

export const Skill: FC<{ data: SkillType }> = ({ data }) => {
  console.log(data);

  return (
    <article className="skill">
      {data.skill_id === 'frontend' && <Frontend />}
      {data.skill_id === 'illustration' && <Illustation />}
      {data.skill_id === 'fullstack' && <Fullstack />}
      {data.skill_id === '3dgraphics' && <ThreeDGraphics />}
      {data.skill_id === 'animation' && <Animation />}
      {data.skill_id === 'webdesign' && <WebDesign />}

      <Title title={data.skill_name} />
      <Description desc={data.skill_desc} />
      <span className="skill__arrow" />
    </article>
  );
};
