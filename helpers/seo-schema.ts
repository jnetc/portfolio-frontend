// Types
import type { MainType } from '@Types';

export function createSchema(data: MainType) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://devan.fi/',
    name: 'devan.fi',
    description: 'UI/UX designer and Front-end developer portfolio',
    author: {
      '@type': 'Person',
      name: 'Anton',
      jobTitle: 'UI / Front-end developer',
      url: 'https://devan.fi/',
      sameAs: [data.stackoverflow_href, data.github_href],
      brand: {
        '@type': 'Brand',
        logo: 'https://devan.fi/icons/favicon-512x512.png',
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
    },
  };
  return schema;
}
