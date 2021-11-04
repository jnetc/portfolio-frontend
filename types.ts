type Locale<T> = {
  [K in keyof T]: string | Array<string>;
};

export interface TransformedData<T> {
  action_btn: Locale<T>;
  second_btn: Locale<T>;
  navigation: Locale<T>;
  slogan: Locale<T>;
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
  context: TransformedData<string> | null;
  lang: string;
}
