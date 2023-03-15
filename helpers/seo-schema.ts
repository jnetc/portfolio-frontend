// Types
import type { MainType } from '@Types';

export function createSchema(data: MainType) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Anton',
    jobTitle: 'UI / Front-end developer',
    url: 'https://www.devan.fi/',
    sameAs: [data.stackoverflow_href, data.github_href],
    brand: {
      '@type': 'Brand',
      logo: 'https://www.devan.fi/icons/icon-512x512.png',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      areaServed: 'FI',
      availableLanguage: ['English', 'Finnish', 'Russian'],
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Espoo',
      addressRegion: 'Uusimaa',
      addressCountry: 'Finland',
    },
  };
  return schema;
}
