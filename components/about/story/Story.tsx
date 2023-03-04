import type { SerializerBlock } from '@Types';

// Hook
import { useContextStore } from '@Hooks/useContextStore';

// Sanity Block text
import { PortableText } from '@Sanity/sanity';

// Style
import style from './story.module.css';

export const Story = () => {
  const { context } = useContextStore();

  const serializer = ({ children }: SerializerBlock) => {
    return <p className={`paragraph ${style.paragraph}`}>{children}</p>;
  };

  return (
    <div className={`${style.module} mob-right-pad grid-12`}>
      <PortableText value={context?.story} components={{ block: serializer }} />
    </div>
  );
};
