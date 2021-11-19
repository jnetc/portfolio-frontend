import { FC } from 'react';
import Image from 'next/image';
import { StackOverflowWidget } from '../stack-overflow/StackOverflowWidget';

import { useStore } from '@Store';

export const Picture: FC = () => {
  const { theme } = useStore();

  return (
    <div id="main-picture">
      <StackOverflowWidget />
      <div className={theme === 'light' ? 'pic-l' : 'pic-d'}>
        <Image
          src={
            theme === 'light'
              ? '/images/picture_light.png'
              : '/images/picture_dark.png'
          }
          alt="Anton"
          layout="fill"
          objectFit="contain"
          quality={80}
          priority
        />
      </div>
      {/* {theme === 'light' ? (
        <div className="pic">
          <Image
            src="/images/picture_light.png"
            alt="Anton"
            blurDataURL="/images/placeholder_light.png"
            placeholder="blur"
            layout="fill"
            objectFit="contain"
            quality={80}
            priority
          />
        </div>
      ) : (
        <div className="pic">
          <Image
            src="/images/picture_dark.png"
            alt="Anton"
            blurDataURL="/images/placeholder_dark.png"
            placeholder="blur"
            layout="fill"
            objectFit="contain"
            quality={80}
            priority
          />
        </div>
      )} */}

      <svg viewBox="0 0 650 436" fill="none" className="rectangle">
        <path d="M245.333 7.52434L633.328 196.22C641.634 200.259 646.093 209.46 644.119 218.482L601.087 415.074C598.89 425.115 589.44 431.855 579.231 430.663L23.3896 365.786C8.60272 364.061 0.817329 347.362 9.0018 334.926L219.88 14.5148C225.404 6.12167 236.297 3.12986 245.333 7.52434Z" />
      </svg>
      <svg viewBox="0 0 565 451" fill="none" className="rectangle">
        <path d="M148.165 5.45832L541.821 58.2812C555.123 60.0662 562.926 74.1872 557.359 86.3993L398.945 433.911C394.056 444.635 381.001 448.828 370.783 442.956L15.3716 238.733C5.60277 233.12 2.39622 220.55 8.28273 210.943L128.452 14.8312C132.588 8.08047 140.318 4.40537 148.165 5.45832Z" />
      </svg>
    </div>
  );
};
