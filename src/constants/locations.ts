export type VenueLocation = {
  type: "location";
  id: number;
  name: string;
  location: string;
  image: string;
  pax: number;
  bookmarked?: boolean;
  distance?: number;
};

export type LocationList = {
  items: VenueLocation[];
};

export const locationList: LocationList = {
  items: [
    {
      type: "location",
      id: 1,
      name: "The OTTO",
      location: "O.T.T.O Wijk bij Duurstede",
      image:
        "https://uploads-ssl.webflow.com/60b4a32f241e993b93b1680e/611e3b5b1b1b9d19eda1d53a_60b4a32f241e99c9f7b16832_The(Any)Thing_2PAX_001-p-1600.jpeg",
      pax: 2,
      bookmarked: true,
      distance: 12,
    },
    {
      type: "location",
      id: 2,
      name: "The Modernist",
      location: "O.T.T.O Wijk bij Duurstede",
      image:
        "https://uploads-ssl.webflow.com/60b4a32f241e993b93b1680e/611e3b5dc7bda0c8bad70eb6_60b4a32f241e99815fb1682f_The(Any)Thing_7PAX_001.jpg",
      pax: 7,
      bookmarked: false,
      distance: 12,
    },
    {
      type: "location",
      id: 3,
      name: "The Studio",
      location: "O.T.T.O Wijk bij Duurstede",
      image:
        "https://uploads-ssl.webflow.com/60b4a32f241e993b93b1680e/611e3b5cc7bda01e0cd70ea7_60b4a32f241e993f24b16830_The(Any)Thing_5PAX_001-p-1600.jpeg",
      pax: 5,
      bookmarked: false,
      distance: 12,
    },
  ],
};
