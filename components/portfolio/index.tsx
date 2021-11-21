import { FC } from 'react';
import Anchor from '@Anchor';
import { RecentProject } from './recent-project/RecentProject';

const Portfolio: FC = () => {
  return (
    <>
      <Anchor anchor="portfolio" hash="#2" />
      <RecentProject />
    </>
  );
};

export default Portfolio;
