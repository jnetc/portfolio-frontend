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
    return <p className="paragraph about__paragraph">{children}</p>;
  };

  return (
    <div className="about mob-right-pad">
      <PortableText
        blocks={context?.story}
        serializers={{ types: { block: serializer } }}
        cla
      />
    </div>
  );
};
