import { FC } from 'react';
import Image from 'next/image';

import { useStore } from '@Store';

export const StackOverflowWidget: FC = () => {
  const { stackoverflow } = useStore();

  console.log(stackoverflow);
  if (!stackoverflow) {
    return null;
  }

  return (
    <section id="stack-overflow_widget">
      <div id="stack-overflow_avatar">
        <Image
          src={stackoverflow?.image}
          alt="avatar stackoverflow"
          layout="fill"
          objectFit="contain"
          quality={80}
          priority
        />
      </div>
      <h1>{stackoverflow.name}</h1>
      <p>UI developer</p>
      <div className="stack-overflow_data">
        <svg width="20" height="19" viewBox="0 0 20 19">
          <path d="M8.67797 2.23814C8.97732 1.31683 10.2807 1.31684 10.5801 2.23815L11.8742 6.22093C12.008 6.63295 12.392 6.91191 12.8252 6.91191H17.013C17.9817 6.91191 18.3845 8.15152 17.6008 8.72093L14.2128 11.1824C13.8623 11.4371 13.7157 11.8884 13.8495 12.3005L15.1436 16.2832C15.443 17.2045 14.3885 17.9707 13.6048 17.4013L10.2168 14.9398C9.86633 14.6851 9.39173 14.6851 9.04124 14.9398L5.65329 17.4013C4.86957 17.9707 3.8151 17.2045 4.11445 16.2832L5.40853 12.3005C5.5424 11.8884 5.39575 11.4371 5.04526 11.1824L1.6573 8.72092C0.873589 8.15152 1.27637 6.91191 2.24509 6.91191H6.43283C6.86606 6.91191 7.25001 6.63295 7.38389 6.22093L8.67797 2.23814Z" />
        </svg>
        <span>{stackoverflow.reputation}</span>
      </div>
      <div className="stack-overflow_data">
        <svg width="14" height="19" viewBox="0 0 14 19">
          <path d="M12.5083 7.3712C12.5083 10.4696 7.73915 17.1083 6.89812 17.1307C6.05709 17.1531 1.28796 10.4696 1.28796 7.3712C1.28796 4.2728 3.79972 1.76105 6.89812 1.76105C9.99652 1.76105 12.5083 4.2728 12.5083 7.3712Z" />
        </svg>
        <span>Finland</span>
      </div>
      <a href={stackoverflow.link} className="btn row-4">
        stack<strong>overflow</strong>
      </a>
    </section>
  );
};
