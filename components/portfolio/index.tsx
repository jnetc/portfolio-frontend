import { FC } from 'react';
import Anchor from '@Anchor';
// Components
import { RecentProject } from '@Portfolio/recent-project/RecentProject';
import { Project } from '@Portfolio/project/Project';
import Separator from '@Separator';
// Hook
import { useStore } from '@Store';

const Portfolio: FC = () => {
  const { context } = useStore();

  const recentProjects = context?.projects
    .filter(f => f.recent)
    .sort((a, b) => {
      const dateA = Date.parse(a.project_completed);
      const dateB = Date.parse(b.project_completed);
      if (dateA > dateB) return -1;
      return 1;
    })
    .map((el, idx) => {
      return (
        <RecentProject
          key={el._id}
          position={idx === 0 ? 'left' : 'right'}
          data={el}
        />
      );
    });

  const otherProjects = context?.projects.map(project => {
    if (!project.recent) return <Project key={project._id} data={project} />;
  });

  return (
    <>
      <Anchor anchor="portfolio" hash="#2" />
      {recentProjects}
      <Separator separator="portfolio" />
      <section className="card-scrollarea">
        <div className="card-wrapper">{otherProjects}</div>
      </section>
    </>
  );
};

export default Portfolio;
