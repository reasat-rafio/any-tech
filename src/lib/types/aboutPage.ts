import type {
  SanityAsset,
  SanityImageDimensions,
} from '@sanity/image-url/lib/types/types';
import type { PortableTextBlock } from 'sanity';

type Section =
  | CommonHeroData
  | StoryData
  | CommonFeaturedContentData
  | ValuesData
  | MissionData
  | FounderData
  | CTAData;

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

export interface StoryData {
  _key: string;
  _type: 'aboutPage.story';
  title: string;
  subtitle: string;
  description: PortableTextBlock;
  image: SanityImageDimensions;
}
export interface FounderData {
  _key: string;
  _type: 'aboutPage.founder';
  title: string;
  subtitle: string;
  description: PortableTextBlock;
  image: SanityImageDimensions;
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
