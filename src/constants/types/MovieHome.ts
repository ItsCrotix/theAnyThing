export type MovieHome = {
  components: Component[];
  links: MovieHomeLinks;
  id: string;
};

export type Component = {
  type: string;
  title?: string;
  image?: Background;
  background?: Background;
  content?: null | string;
  duration?: string;
  originalLanguage?: string;
  audioLanguage?: null;
  subtitleLanguage?: null;
  genres?: Genre[];
  rating?: string;
  classificationType?: string;
  classifications?: string[];
  id: string;
  productAvailable?: boolean;
  video?: Background;
  items?: Item[];
  subtitle?: null;
  laneType?: string;
  more?: null;
  button?: Button;
  mainText?: string;
  subText?: string;
};

export type Background = {
  url: string;
};

export type Button = {
  type: string;
  content: string;
  links: ButtonLinks;
};

export type ButtonLinks = {
  action: string;
};

export type Genre = {
  text: string;
  links: GenreLinks;
};

export type GenreLinks = {
  detail: string;
};

export type Item = {
  links: GenreLinks;
  text?: string;
  type?: string;
  id?: string;
  title?: string;
  posterImage?: string;
};

export type MovieHomeLinks = {
  self: string;
};
