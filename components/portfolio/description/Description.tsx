import { FC } from 'react';
// Type
import { SanitySerializer } from '@Types';
// Sanity Block text
import { PortableText } from '@Sanity/sanity';

export const Description: FC<{ desc: string }> = ({ desc }) => {
  // Sanity block component
  const serializer = ({ children }: SanitySerializer) => {
    return <p className="card-description">{children}</p>;
  };

  return (
    <PortableText
      blocks={desc}
      serializers={{ types: { block: serializer } }}
    />
  );
};
