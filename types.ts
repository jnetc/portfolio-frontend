export type Locale = {
  [key: string]: string | Array<string>;
};
// export type Locale<T> = {
//   [K in keyof T]: string | Array<string>;
// };

export interface TransformedData {
  action_btn: string;
  second_btn: string;
  navigation: Array<string>;
  slogan: Array<string>;
}

export interface Localization {
  en: string | Array<string>;
  ru: string | Array<string>;
}

export interface Data {
  action_btn: Localization;
  second_btn: Localization;
  navigation: Localization;
  slogan: Localization;
}

export interface Store {
  context: TransformedData | null;
  lang: string;
}
