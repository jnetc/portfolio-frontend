import { FC } from 'react';

import { HomeLeftSide } from '@Home/home-left-side/HomeLeftSide';
import { HomeRightSide } from '@Home/home-right-side/HomeRightSide';

const Home: FC = () => {
  return (
    <>
      <HomeLeftSide />
      <HomeRightSide />
    </>
  );
};

export default Home;
