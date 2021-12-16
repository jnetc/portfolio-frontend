import { FC } from 'react';
import Image from 'next/image';
// Type
import { MainPhotoType } from '@Types';

export const MainPhoto: FC<MainPhotoType> = ({ src, cssClass, theme }) => {
  return (
    <div className={theme ? `${cssClass} pic-show` : `${cssClass}`}>
      <Image
        src={src}
        alt="Anton"
        height={650}
        width={300}
        layout="responsive"
        objectFit="contain"
        quality={80}
        // priority
      />
    </div>
  );
};
