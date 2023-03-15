// Types
// import type { DataType, Employees } from '@Types';

export function createSchema() {
  // const employees = new Set<Employees>();

  // for (const team of data.whatweoffer.services) {
  //   for (const member of team.teammates) {
  //     const obj = {
  //       '@type': 'Person',
  //       name: member.title,
  //       jobTitle: member.proff,
  //       description: member.description,
  //       image: member.avatar.url,
  //     };
  //     employees.add(obj);
  //   }
  // }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Anton',
    url: 'https://www.devan.fi',
    logo: 'https://www.devan.fi/icons/icon-512x512.png',
    additionalName: 'Anton',
    jobTitle: 'UI / Front-end developer',
    description:
      'I am focused build intuitive web design and creating modern, responsive web apps, pages and interfaces using JavaScript frameworks, CSS, Animation, and more!',
    // employees: [...Array.from(employees)],
    author: {
      '@type': 'CreativeWork',
      author: 'Anton',
    },
  };
  return schema;
}
