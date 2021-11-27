import { FC } from 'react';

import { HomeLeftSide } from './home-left-side/HomeLeftSide';
import { HomeRightSide } from './home-right-side/HomeRightSide';

const Home: FC = () => {
  return (
    <>
      <HomeLeftSide />
      <HomeRightSide />
    </>
  );
};

export default Home;
