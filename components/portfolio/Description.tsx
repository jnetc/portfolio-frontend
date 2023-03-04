import type { SerializerBlock, SerializerLink } from '@Types';
// Sanity Block text
import { PortableText } from '@Sanity/sanity';

export const Description = ({ desc }: { desc: string }) => {
  const serializerBlock = ({ children }: SerializerBlock) => {
    return <p className="paragraph">{children}</p>;
  };

  const serializerLink = ({ children, value }: SerializerLink) => {
    return (
      <a href={value.href} target="_blank" rel="noreferrer" title={`${value.href}`}>
        {[children]}
      </a>
    );
  };

  return (
    <PortableText
      renderContainerOnSingleChild={true}
      value={desc}
      components={{
        block: serializerBlock,
        marks: {
          link: serializerLink,
        },
      }}
    />
  );
};
