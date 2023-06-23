import { MovieComponent } from "./MovieComponent";

type MovieDataLinks = {
  self: string;
};

export type MovieData = {
  id: null;
  links: MovieDataLinks;
  components: MovieComponent[];
};
