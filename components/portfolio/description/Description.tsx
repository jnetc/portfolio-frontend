import { FC } from 'react';
// Type
import { SerializerBlock, SerializerLink } from '@Types';
// Sanity Block text
import { PortableText } from '@Sanity/sanity';

export const Description: FC<{ desc: string }> = ({ desc }) => {
  // Sanity block component
  // https://codesandbox.io/s/portable-text-serializer-demo-all-defaults-p8ms8?file=/src/Page.js:1208-1214

  const serializerBlock = ({ children }: SerializerBlock) => {
    return <p className="paragraph">{children}</p>;
  };

  const serializerLink = ({ children, mark }: SerializerLink) => {
    return (
      <a className="paragraph__link" href={mark.href}>
        {[children]}
      </a>
    );
  };

  return (
    <PortableText
      blocks={desc}
      serializers={{
        types: { block: serializerBlock },
        marks: { link: serializerLink },
      }}
    />
  );
};
