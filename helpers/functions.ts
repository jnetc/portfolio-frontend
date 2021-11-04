import { Data, TransformedData } from 'types';

export const transformLocalization = (lang: string, arr: Data) => {
  const toKeyAndLanguages = Object.entries(arr);
  const newObj = {};

  for (const [key, value] of toKeyAndLanguages) {
    Object.assign(newObj, { [key]: value[lang] });
  }

  return newObj as TransformedData<string>;
};
