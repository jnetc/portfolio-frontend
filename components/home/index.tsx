import { FC } from 'react';

import { Title } from './title/Title';
import { Picture } from './picture/Picture';

const Home: FC = () => {
  return (
    <>
      <Title />
      <Picture />
    </>
  );
};

export default Home;
