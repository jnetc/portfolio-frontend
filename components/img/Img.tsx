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
      sizes="100wv"
      fill
      quality={80}
      style={{ objectFit: `${objectFit === 'cover' ? 'cover' : 'contain'}` }}
    />
  );
};

export default Img;
