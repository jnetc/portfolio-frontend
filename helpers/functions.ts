import { Data, TransformedData } from 'types';

export const transformLocalization = (
  lang: string,
  arr: Data
): TransformedData => {
  const toKeyAndLanguages = Object.entries(arr);
  const newObj = {};

  for (const [key, val] of toKeyAndLanguages) {
    const value = val[lang] as string | Array<string>;
    Object.assign(newObj, { [key]: value });
    // if (typeof val[lang] === 'string') {
    //   value = val[lang] as string | Array<string>;
    //   Object.assign(newObj, { [key]: value });
    // } else {
    //   value = val[lang] as Array<string>;
    //   Object.assign(newObj, { [key]: value });
    // }
  }

  return newObj as TransformedData;
};

export const animationOptimization = (duration: number) => {
  let start: null | number = null;

  const step = (timestamp: number) => {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};
