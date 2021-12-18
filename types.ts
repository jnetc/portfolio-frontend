interface SanityKeyType {
  _key: string;
  _type: string;
}
export interface Query extends SanityKeyType {
  _createdAt: string;
  _rev: string;
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

export interface ImageType {
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

export interface MainPhotoType {
  cssClass: string;
  src: string;
  theme: boolean;
}

export interface Handler<T> {
  [key: string]: (value: T) => void;
}

export type Status = 'default' | 'success' | 'error';

export interface InputFromType {
  typeInput: 'text' | 'email';
  nameInput: 'name' | 'email';
  handler: (val: string) => void;
  value: string;
}
export interface TextareaFromType
  extends Pick<InputFromType, 'handler' | 'value'> {
  nameInput: 'message';
}

export interface ContextStore {
  context: TransformedData | null;
  lang: 'en' | 'ru';
  stackoverflow: StackOverflow<string> | null;
}

export interface ModalType {
  show: boolean;
  name?: string;
}
export interface Notice {
  status: Status;
  message?: string;
}

export interface ContextMain {
  theme: string;
  switchTheme: (theme: string) => void;
  modal: ModalType;
  toggleModal: (show: ModalType) => void;
  notice: Notice;
  setNotify: (notice: Notice) => void;
  response: Notice;
  setResponse: (notice: Notice) => void;
}

export type StackOverflow<T> = {
  reputation: T;
  link: T;
  answers: T;
};

export interface AnchorType {
  name: 'portfolio' | 'skills' | 'about';
  hash: '#2' | '#3' | '#4';
}

export interface SerializerBlock {
  children: Array<string>;
  isInline: undefined;
  node: SerializerNode;
  options: {};
}
interface SerializerNodeChildren extends SanityKeyType {
  marks: Array<string>;
  text: string;
}
interface SerializerMark extends SanityKeyType {
  href: string;
}
interface SerializerNode extends SanityKeyType {
  children: Array<SerializerNodeChildren>;
  markDefs: Array<SerializerMark>;
  style: string;
}

export interface SerializerLink extends SanityKeyType {
  children: Array<string>;
  mark: SerializerMark;
  markKey: string;
}

export interface HomeLeftBtnType {
  style: 'primary' | 'secondary';
  open: string;
  accessibility: string;
}

export interface NavLink {
  anchor: 'home' | 'portfolio' | 'skills' | 'about';
  en: string;
  ru: string;
}

export interface LinkNameType {
  link: NavLink;
  handler: (close: boolean) => void;
}

export interface FooterLink {
  name: string;
  link: string;
}

export interface ImageComponentType {
  pathImage: ImageType;
  objectFit: 'fill' | 'cover';
  alt: string;
}

export interface RequestBodyType {
  name: string;
  email: string;
  message: string;
}
export interface ResponseType {
  status: string;
  message: { en: string; ru: string };
}
