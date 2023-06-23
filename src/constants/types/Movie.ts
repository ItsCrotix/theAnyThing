import { Type } from "../enums/Type";
import { ComponentLinks } from "./ComponentLinks";

export type Movie = {
  links: ComponentLinks;
  backgroundImage?: null;
  duration?: number;
  id: string;
  posterImage?: string;
  title: string;
  type: Type;
  image?: string;
};
