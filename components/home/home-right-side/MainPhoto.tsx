import Image from 'next/image';
// Type
import { MainPhotoType } from '@Types';

export const MainPhoto = ({ src, cssClass, theme }: MainPhotoType) => {
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
        className="avatar"
        priority
      />
    </div>
  );
};
