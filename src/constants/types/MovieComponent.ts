import { ComponentLinks } from "./ComponentLinks";
import { More } from "./More";
import { Movie } from "./Movie";

export type MovieComponent = {
  links?: ComponentLinks;
  id: string;
  image?: string;
  title: string;
  type: string;
  items?: Movie[];
  laneType?: string;
  more?: More | null;
  apiCall?: string;
};
