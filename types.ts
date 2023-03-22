import { LandingPageContext } from '@Helpers/functions';
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
  stackoverflow_href: string;
  linkedin_href: string;
  email: string;
  meta_title: string;
  meta_desc: string;
  title: Array<string>;
  extra: Array<string>;
  story: Array<string>;
}

export interface ImageType {
  _type: string;
  asset: {
    _ref: string;
  };
}

export interface VideoType {
  _type: string;
  asset: {
    _ref: string;
  };
}

export interface ProjectType {
  _id: string;
  recent: boolean;
  poster: ImageType;
  video: VideoType;
  video_url: string;
  label_recent: string;
  label: string;
  project_completed: string;
  project_title: string;
  description: string;
  tags: Array<string>;
  page_href: string;
  github_href: string;
  figma_href: string;
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

export type LandingPageData = MainType & ProjectType & SkillType & CourseType & Query;

export type ResumeDataFromSanity = Query & ResumeProfileType & ResumeNoticeType & ResumeArticleType;

export interface ResumeData {
  profile: ResumeProfileType;
  experience: Array<ResumeArticleType>;
  education: Array<ResumeArticleType>;
  skills: Array<ResumeArticleType>;
  languages: Array<ResumeArticleType>;
  interests: Array<ResumeArticleType>;
}
export interface ResumeProfileType {
  _id: string;
  name: string;
  professional: string;
  summary: Array<string>;
  github_href: string;
  stackoverflow_href: string;
  linkedin_href: string;
  email: string;
  location: string;
}
export type ResumeLinksType = Pick<ResumeProfileType, 'email' | 'github_href' | 'stackoverflow_href' | 'linkedin_href' | 'location'>;

export interface ResumeNoticeType {
  _id: string;
  active: boolean;
  title: string;
  subtitle: string;
  info: Array<string>;
  button_name: string;
  external_href: string;
}

export interface ResumeArticleType {
  _id: string;
  title?: string;
  date?: string;
  place?: string;
  description?: string;
  tags?: Array<string>;
  link?: string;
  order?: number;
}

export interface ArticleType {
  data: ResumeArticleType;
  positionLeft?: boolean;
  cssClass: string;
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
export interface TextareaFromType extends Pick<InputFromType, 'handler' | 'value'> {
  nameInput: 'message';
}

export interface ModalType {
  show: boolean;
  name?: string;
}
export interface Notice {
  status: Status;
  message?: string;
}

// CONTEXT'S
export interface ContextStore {
  context: LandingPageContext | null;
  stackoverflow?: StackOverflow<string>;
}

export type LanguagesType = 'en' | 'ru' | 'fi';
export interface ContextLanguage {
  lang: LanguagesType;
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

export interface ScrollButtonType {
  visible: boolean;
  move: string;
  handler: (direction: string) => void;
}

export interface LinksType {
  url: string;
  cssClass?: string;
}

export interface AnchorType {
  name: 'portfolio' | 'skills' | 'about';
  hash: '#2' | '#3' | '#4';
}

export interface SerializerBlock {
  children: Array<string>;
  isInline: undefined;
  value: SerializerNode;
  options: {};
}
interface SerializerNodeChildren extends SanityKeyType {
  value: Array<string>;
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
  value: SerializerMark;
  markKey: string;
}

export interface ButtonWithArrawType {
  cssClass?: string;
  accessibility: string;
  route?: '' | 'resume';
  name: 'resume';
}

export interface NavLink {
  anchor: 'home' | 'portfolio' | 'skills' | 'about';
  en: string;
  ru: string;
  fi: string;
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
  message: { en: string; ru: string; fi: string };
}

export type MonthType = 'jan' | 'feb' | 'mar' | 'apr' | 'may' | 'june' | 'july' | 'aug' | 'sept' | 'oct' | 'nov' | 'dec';
