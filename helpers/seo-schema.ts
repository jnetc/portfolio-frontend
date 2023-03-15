// Types
import type { MainType } from '@Types';

export function createSchema(data: MainType) {
  console.log(data);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Anton',
    url: 'https://www.devan.fi',
    jobTitle: 'UI / Front-end developer',
    description: data.meta_desc,
    sameAs: [data.stackoverflow_href, data.github_href],
  };
  return schema;
}
