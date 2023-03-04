import Image from 'next/image';
// Type
import { MainPhotoType } from '@Types';

export const MainPhoto = ({ src, cssClass, theme }: MainPhotoType) => {
  return (
    <div className={theme ? `${cssClass} pic-show` : `${cssClass}`}>
      <Image priority src={src} alt="Anton" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
    </div>
  );
};
