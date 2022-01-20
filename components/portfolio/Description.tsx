// Type
import { SerializerBlock, SerializerLink, SerializerContainer } from '@Types';
// Sanity Block text
import { PortableText } from '@Sanity/sanity';

export const Description = ({ desc }: { desc: string }) => {
  // Sanity block component
  // https://codesandbox.io/s/portable-text-serializer-demo-all-defaults-p8ms8?file=/src/Page.js:1208-1214

  const container = (props: SerializerContainer) => {
    return <div className="pad-block-start">{props.children}</div>;
  };

  const serializerBlock = ({ children }: SerializerBlock) => {
    return <p className="paragraph">{children}</p>;
  };

  const serializerLink = ({ children, mark }: SerializerLink) => {
    return (
      <a
        className="paragraph__link"
        href={mark.href}
        target="_blank"
        rel="noreferrer"
        title={`${mark.href}`}
      >
        {[children]}
      </a>
    );
  };

  return (
    <PortableText
      renderContainerOnSingleChild={true}
      blocks={desc}
      serializers={{
        types: { block: serializerBlock },
        marks: { link: serializerLink },
        container,
      }}
    />
  );
};
