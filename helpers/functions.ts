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
