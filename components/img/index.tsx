import { FC } from 'react';
import Image from 'next/image';
// Sanity
import { urlFor } from '@Sanity/sanity';
// Type
import { ImageComponentType } from '@Types';

const Img: FC<ImageComponentType> = ({ pathImage, objectFit, alt }) => {
  const imageUrl = urlFor(pathImage).url() || '';
  return (
    <Image
      src={imageUrl}
      alt={alt}
      objectFit={objectFit}
      layout="fill"
      quality={80}
      priority
    />
  );
};

export default Img;
