import { FC } from 'react';
// Sanity Block text
import { PortableText } from '@Sanity/sanity';
// Hook
import { useContextStore } from '@Hooks/useContextStore';
// Types
import { SerializerBlock } from '@Types';
// Style
import style from './story.module.css';

export const Story: FC = () => {
  const { context } = useContextStore();

  const serializer = ({ children }: SerializerBlock) => {
    return <p className={`paragraph ${style.paragraph}`}>{children}</p>;
  };

  return (
    <div className={`${style.module} mob-right-pad grid-12`}>
      <PortableText
        blocks={context?.story}
        serializers={{ types: { block: serializer } }}
        cla
      />
    </div>
  );
};
