import { TransformedData, MainType, SanityData, ProjectType } from 'types';

export const transformLocalization = (
  lang: string,
  arr: Array<SanityData>
): TransformedData => {
  const data = {} as MainType;
  const projects: Array<ProjectType> = [];
  // const skills = [];
  // const education = [];

  for (const type of arr) {
    // Generate the main content object
    if (type._type === 'main') {
      const main: MainType = type;

      const result = transformData(main, lang);
      Object.assign(data, { ...result });
    }
    // Generate an array of the project objects
    if (type._type === 'projects') {
      const project: ProjectType = type;

      const result = transformData(project, lang);
      projects.push(result);
    }
  }

  return Object.assign(data, { projects }) as TransformedData;
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
