import type { SanityAsset } from '@sanity/image-url/lib/types/types';

type Section = CommonHeroData | CommonFeaturedContentData | ValuesData;

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

export interface ValueData {
  _key: string;
  image: SanityAsset;
  title: string;
  description: string;
}
