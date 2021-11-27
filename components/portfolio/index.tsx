import { FC } from 'react';
import Anchor from '@Anchor';
// Components
import { RecentProject } from './recent-project/RecentProject';
import { Project } from './project/Project';
import Separator from '../separator';
// Hook
import { useStore } from '@Store';

const Portfolio: FC = () => {
  const { context } = useStore();

  const recentProjects = context?.projects.map(recent => {
    if (!recent.recent) return;
    if (recent.recent_order === 1) {
      return <RecentProject key={recent._id} position="left" data={recent} />;
    }
    if (recent.recent_order === 2) {
      return <RecentProject key={recent._id} position="right" data={recent} />;
    }
  });

  const otherProjects = context?.projects.map(project => {
    if (!project.recent) return <Project key={project._id} data={project} />;
  });

  return (
    <>
      <Anchor anchor="portfolio" hash="#2" />
      {recentProjects}
      <Separator separator="portfolio" />
      <section className="projects-scrollarea">
        <div className="projects-archive">{otherProjects}</div>
      </section>
    </>
  );
};

export default Portfolio;
