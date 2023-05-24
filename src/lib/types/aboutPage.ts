import type { SanityAsset } from '@sanity/image-url/lib/types/types';

type Section =
  | CommonHeroData
  | CommonFeaturedContentData
  | ValuesData
  | MissionData;

export interface AboutPageData {
  seo: BaseMetaData;
  sections: Section[];
}

export interface ValuesData {
  _key: string;
  _type: 'aboutPage.values';
  title?: string;
  subtitle?: string;
  values?: ValueData[];
}

export interface MissionData {
  _key: string;
  _type: 'aboutPage.mission';
  missions: Mission[];
}

export interface Mission {
  _key: string;
  title: string;
  description: string;
  image: SanityAsset;
}

export interface ValueData {
  _key: string;
  image: SanityAsset;
  title: string;
  description: string;
}
