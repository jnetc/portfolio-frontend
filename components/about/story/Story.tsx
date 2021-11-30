import { FC } from 'react';
// Sanity Block text
import { PortableText } from '@Sanity/sanity';
// Hook
import { useStore } from '@Store';
// Types
import { SanitySerializer } from '@Types';
// import BlockContent from '@Sanity/block-content-to-react'

export const Story: FC = () => {
  const { context } = useStore();

  const serializer = ({ children }: SanitySerializer) => {
    return <p className="card-description about__paragraph">{children}</p>;
  };

  return (
    <div className="about">
      <PortableText
        blocks={context?.story}
        serializers={{ types: { block: serializer } }}
        cla
      />
    </div>
  );
};
