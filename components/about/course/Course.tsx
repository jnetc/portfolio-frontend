import { FC } from 'react';
// Sanity Block text
import { PortableText } from '@Sanity/sanity';
// Hook
import { useStore } from '@Store';
// Types
import { SanitySerializer } from '@Types';

export const Cource: FC = () => {
  const { context } = useStore();
  // Sanity block component
  const serializer = {
    types: {
      block: (props: SanitySerializer) => {
        return <p className="home-left-side__desc">{props.children}</p>;
      },
    },
  };
  return (
    <article>
      <PortableText blocks={context?.slogan} serializers={serializer} />
    </article>
  );
};
