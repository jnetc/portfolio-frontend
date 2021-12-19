import Image from 'next/image';
// Sanity
import { urlFor } from '@Sanity/sanity';
// Type
import { ImageComponentType } from '@Types';

const Img = ({ pathImage, objectFit, alt }: ImageComponentType) => {
  const imageUrl = urlFor(pathImage).url() || '';
  return (
    <Image
      src={imageUrl}
      alt={alt}
      objectFit={objectFit}
      layout="fill"
      quality={80}
    />
  );
};

export default Img;
