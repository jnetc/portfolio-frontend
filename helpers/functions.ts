import {
  MainType,
  LandingPageData,
  ProjectType,
  SkillType,
  CourseType,
  ResumeArticleType,
  ResumeDataFromSanity,
  ResumeProfileType,
  ResumeNoticeType,
  LanguagesType,
  MonthType,
} from 'types';

import { dataMonth } from '@Helpers/localization';

type ObjectKeys = 'main' | 'resume_profile' | 'resume_notice';
type ArrayKeys =
  | 'projects'
  | 'skills'
  | 'education'
  | 'resume_education'
  | 'resume_experience'
  | 'resume_skills'
  | 'resume_languages'
  | 'resume_interests';

export const transformLocalization = (lang: string, arr: Array<LandingPageData>) => {
  const main = {} as MainType;
  const projects: Array<ProjectType> = [];
  const skills: Array<SkillType> = [];
  const education: Array<CourseType> = [];

  const arrays = {
    projects,
    skills,
    education,
  };
  const objects = {
    main,
  };

  arrays.projects = mergeArrayData(arr, 'projects', lang);
  arrays.skills = mergeArrayData(arr, 'skills', lang);
  arrays.education = mergeArrayData(arr, 'education', lang);

  objects.main = mergeObjectData(arr, 'main', lang);

  return { ...objects.main, ...arrays };
};

export type LandingPageContext = ReturnType<typeof transformLocalization>;

export const transformLocalizationResume = (lang: string, arr: Array<ResumeDataFromSanity>) => {
  const resume_profile = {} as ResumeProfileType;
  const resume_notice = {} as ResumeNoticeType;
  const resume_experience: Array<ResumeArticleType> = [];
  const resume_education: Array<ResumeArticleType> = [];
  const resume_skills: Array<ResumeArticleType> = [];
  const resume_languages: Array<ResumeArticleType> = [];
  const resume_interests: Array<ResumeArticleType> = [];

  const arrays = {
    resume_experience,
    resume_education,
    resume_skills,
    resume_languages,
    resume_interests,
  };
  const objects = {
    resume_profile,
    resume_notice,
  };

  arrays.resume_experience = mergeArrayData(arr, 'resume_experience', lang);
  arrays.resume_education = mergeArrayData(arr, 'resume_education', lang);
  arrays.resume_skills = mergeArrayData(arr, 'resume_skills', lang);
  arrays.resume_languages = mergeArrayData(arr, 'resume_languages', lang);
  arrays.resume_interests = mergeArrayData(arr, 'resume_interests', lang);

  objects.resume_profile = mergeObjectData(arr, 'resume_profile', lang);
  objects.resume_notice = mergeObjectData(arr, 'resume_notice', lang);

  return { ...objects, ...arrays };
};

const mergeObjectData = <T>(
  sanityStaticProps: Array<ResumeDataFromSanity | LandingPageData>,
  key: ObjectKeys,
  lang: string
) => {
  const obj = {} as T;

  for (const type of sanityStaticProps) {
    if (type._type === `${key}`) {
      Object.assign(obj, { ...transformData(type, lang) });
    }
  }
  return obj;
};

const mergeArrayData = <T>(
  sanityStaticProps: Array<ResumeDataFromSanity | LandingPageData>,
  key: ArrayKeys,
  lang: string
) => {
  const arr: Array<T> = [];

  for (const type of sanityStaticProps) {
    if (type._type === `${key}`) {
      // convert the expression to 'unknown' first.
      const result = transformData(type, lang) as unknown;
      arr.push(result as T);
    }
  }
  return arr;
};

const transformData = <T>(currObj: T, lang: string): T => {
  // Remove this unnecessary keys
  const ignoreKeys = ['_createdAt', '_rev', '_type', '_updatedAt'];
  const obj = {} as T;

  const arrKeyAndValue = Object.entries(currObj);

  for (const [key, val] of arrKeyAndValue) {
    // Checking valid keys
    if (!ignoreKeys.includes(key)) {
      // Boolean, is the key has a locale value ['en', 'ru']
      const isLocale = Object.getOwnPropertyNames(val).includes('en');
      // If the value has localization
      if (typeof val === 'object' && isLocale) {
        Object.assign(obj, { [key]: val[lang] });
      }
      if (!isLocale) {
        Object.assign(obj, { [key]: val });
      }
    }
  }
  return obj;
};

export const animationOptimization = (duration: number) => {
  let start: null | number = null;

  const step = (timestamp: number) => {
    if (!start) start = timestamp;

    const progress = timestamp - start;
    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

export const dataTranslate = (data: string, lang: LanguagesType) => {
  const day = data.split(',')[0].split(' ')[1];
  const year = data.split(',')[1].trim();
  const month = data.substring(0, 4).trim().toLocaleLowerCase() as MonthType;

  return `${dataMonth[month][lang]} ${day}, ${year}`;
};
