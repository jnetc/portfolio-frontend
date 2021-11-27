// export type Locale = {
//   [key: string]: string | Array<string>;
// };
// export type Locale<T> = {
//   [K in keyof T]: string | Array<string>;
// };
// interface Localization {
//   en: string | Array<string>;
//   ru: string | Array<string>;
// }

export interface Query {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

export interface MainType {
  _id: string;
  github_href: string;
  meta_title: string;
  meta_desc: string;
  slogan: Array<string>;
  title: string;
  story: Array<string>;
}

interface Poster {
  _type: string;
  asset: {
    _ref: string;
  };
}

export interface ProjectType {
  _id: string;
  recent: boolean;
  poster: Poster;
  label_recent: string;
  label: string;
  recent_order: number;
  project_title: string;
  description: string;
  tags: Array<string>;
  page_href: string;
  github_href: string;
}

export type SanityData = MainType & ProjectType & Query;

export interface TransformedData extends MainType {
  projects: Array<ProjectType>;
}

// export interface Main {
//   github_href: string;
//   meta_title: Localization;
//   meta_desc: Localization;
//   slogan: Localization;
//   title: Localization;
// }

// export interface Projects {
//   recent_project: Localization;
//   recent: boolean;
//   project_title: string;
//   description: Localization;
//   poster: string;
//   stacks: Array<string>;
//   page_href: string;
//   github_href: string;
// }

// export interface Data<T> {
//   data: Array<T>;
// }

export interface Store {
  context: TransformedData | null;
  lang: string;
  theme: string;
  switchTheme: (lang: string) => void;
  stackoverflow: StackOverflow<string> | null;
}

export type StackOverflow<T> = {
  reputation: T;
  link: T;
  answers: T;
};

export type AnchorType = 'portfolio' | 'skills' | 'about';
export type HashType = '#2' | '#3' | '#4';
export type SeparatorsType = 'portfolio' | 'about';

export interface SanitySerializer {
  children: [];
  isInline: undefined;
  node: {};
  options: {};
}

// export interface M {
//   _createdAt: string;
//   _id: string;
//   _rev: string;
//   _type: string;
//   _updatedAt: string;
//   github_href: string;
//   meta_title: Localization;
//   meta_desc: Localization;
//   slogan: Localization;
//   story: Localization;
//   title: Localization;
// }
// export interface P {
//   _createdAt: string;
//   _id: string;
//   _rev: string;
//   _type: string;
//   _updatedAt: string;
//   description: Localization;
//   github_href: string;
//   page_href: string;
//   name_project: Localization;
//   poster: Poster;
//   project_title: string;
//   recent: boolean;
//   recent_project: Localization;
//   stacks: Array<string>;
// }
