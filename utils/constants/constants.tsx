export const flagCDN =
  'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/';
// It just use to if use many place and common

export const publicPaths = ['/', '/events', '/event', '/discover'];

export const optionFilter = [
  {
    title: 'Trending',
    value: 'trending',
  },
  {
    title: 'Recently Listed',
    value: 'recently_listed',
  },
  {
    title: 'Price: Hight to Low',
    value: 'price_high_to_low',
  },
  {
    title: 'Price: Low to High',
    value: 'price_low_to_high',
  },
];
export type optionEventType = {
  value: string;
  label: string;
};
export const categoryEvent: optionEventType[] = [
  { value: 'concert', label: 'Concert' },
  { value: 'festival', label: 'Festival' },
  { value: 'art', label: 'Art' },
  { value: 'party', label: 'Party' },
  { value: 'live-music', label: 'Live Music' },
  { value: 'tech', label: 'Technology' },
  { value: 'conference', label: 'Conference' },
  { value: 'education&learning', label: 'Education & Learning' },
];

export interface TicketMetaResult {
  amount: number;
  asset: string;
  description: string;
  name: string;
  price: number;
  tier: number;
  remaining: number;
}
export interface SignerMetaResult {
  age: number;
  image: string;
  name: string;
  sex: string;
}
export interface EventMedataResult {
  category: string[];
  timeForSell: number;
  deadlineForSell: number;
  startTime: number;
  endTime: number;
  license: string;
  name: string;
  description: string;
  location: string;
  image: string;
  organizer: string;
  tickets: TicketMetaResult[];
  singers: SignerMetaResult[];
}
