export enum ImageFormat {
  HomeHeroHeader = '1125x960',
  DetailHeader = '1029x690',
  ProductLaneItem = '256x380',
  SpotlightLaneItem = '750x1248',
  MovieGridItem = '384x570',
  LocationLaneItem = '528x480',
  TrailerPoster = '686x360',
  GenrePoster = '135x200',
  LocationDetailCarouselItem = '670x480',
  BookingNavigatorPoster = '80x114',
  TicketPoster = '384x570',
  LastMinuteItem = '670x260',
  OrderProductItemOverview = '176x176',
  OrderProductItemDetail = '750x540',
}

export enum ImageRatio {
  HomeHeroHeader = 375 / 320,
  DetailHeader = 343 / 230,
  ProductLaneItem = 128 / 190,
  SpotlightLaneItem = 240 / 400,
  MovieGridItem = 270 / 400,
  LocationLaneItem = 264 / 240,
  TrailerPoster = 343 / 180,
  GenrePoster = 94 / 54,
  LocationDetailCarouselItem = 335 / 240,
  BookingNavigatorPoster = 57 / 81,
  TicketPoster = 135 / 200,
  LastMinuteItem = 335 / 130,
  OrderProductItemOverview = 88 / 88,
  OrderProductItemDetail = 375 / 270,
}

export default function formatImageUrl(
  url: string,
  format: ImageFormat,
): string {
  return url.replace('[format]', format);
}
