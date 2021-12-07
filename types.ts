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
  linkedin_href: string;
  meta_title: string;
  meta_desc: string;
  slogan: Array<string>;
  title: string;
  story: Array<string>;
}

interface ImageType {
  _type: string;
  asset: {
    _ref: string;
  };
}

export interface ProjectType {
  _id: string;
  recent: boolean;
  poster: ImageType;
  label_recent: string;
  label: string;
  project_completed: string;
  project_title: string;
  description: string;
  tags: Array<string>;
  page_href: string;
  github_href: string;
}

export interface SkillType {
  _id: string;
  skill_id: string;
  skill_name: string;
  skill_desc: string;
}
export interface CourseType {
  _id: string;
  course_completed: string;
  course_image: ImageType;
  course_name: string;
  course_desc: string;
  course_href: string;
  certificate_href: string;
}

export interface EmployerModalType {
  active: boolean;
  title: string;
  subtitle: string;
  info: Array<string>;
  subsidy: string;
  extra_info: string;
  modal_href: string;
}

export type SanityData = MainType &
  ProjectType &
  SkillType &
  CourseType &
  EmployerModalType &
  Query;

export interface TransformedData extends MainType {
  projects: Array<ProjectType>;
  skills: Array<SkillType>;
  courses: Array<CourseType>;
  modal: EmployerModalType;
}

export interface ModalType {
  show: boolean;
  name?: string;
}

export interface Store {
  context: TransformedData | null;
  lang: string;
  theme: string;
  switchTheme: (lang: string) => void;
  stackoverflow: StackOverflow<string> | null;
  modal: ModalType;
  toggleModal: (show: ModalType) => void;
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

export interface MailStateType {
  [key: string]: string;
}
