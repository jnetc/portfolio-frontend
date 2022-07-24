// Components
import Anchor from 'components/anchor/Anchor';
import { RecentProject } from '@Portfolio/RecentProject';
import { Project } from '@Portfolio/Project';
import { ScrollArea } from '@ScrollArea';
import Separator from '@Separator';
// Hook
import { useContextStore } from '@Hooks/useContextStore';

const Portfolio = () => {
  const { context } = useContextStore();

  const recentProjects = context?.projects
    .filter(f => f.recent)
    .sort((a, b) => {
      const dateA = Date.parse(a.project_completed);
      const dateB = Date.parse(b.project_completed);
      if (dateA > dateB) return -1;
      return 1;
    })
    .map((el, idx) => {
      const odd = (idx + 1) % 2;
      return <RecentProject key={el._id} position={odd === 1} data={el} />;
    });

  const otherProjects = context?.projects
    .filter(project => {
      if (!project.recent) return project;
    })
    .sort((a, b) => {
      const dateA = Date.parse(a.project_completed);
      const dateB = Date.parse(b.project_completed);
      if (dateA > dateB) return -1;
      return 1;
    })
    .map(project => {
      return <Project key={project._id} data={project} />;
    });

  return (
    <>
      <Anchor name="portfolio" hash="#2" />
      {recentProjects}
      <Separator name="portfolio" />
      <ScrollArea>{otherProjects}</ScrollArea>
    </>
  );
};

export default Portfolio;
