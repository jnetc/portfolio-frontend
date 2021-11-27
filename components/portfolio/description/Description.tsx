import { FC } from 'react';
// Type
import { SanitySerializer } from '@Types';
// Sanity Block text
import { PortableText } from '@Sanity/sanity';

export const Description: FC<{ desc: string }> = ({ desc }) => {
  // Sanity block component
  const serializer = {
    types: {
      block: (props: SanitySerializer) => {
        return <p className="project__desc">{props.children}</p>;
      },
    },
  };
  return <PortableText blocks={desc} serializers={serializer} />;
};
