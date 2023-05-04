import type { SanityAsset } from '@sanity/image-url/lib/types/types';
import type { SanityDimensionedImage } from 'astro-sanity-picture';
import type { PortableTextBlock } from 'sanity';

interface Content {
  title: string;
  description: PortableText[];
}

export interface Hero {
  _type: string;
  title: string;
  contentList: Content[];
}

export interface Mission {
  _type: string;
  title: string;
  description: PortableText[];
}

interface Card {
  title: string;
  description: string;
  logo: SanityDimensionedImage;
}

export interface WhyKrypton {
  _type: string;
  title: string;
  cards: Card[];
}

export interface Business {
  _type: 'homePage.business';
  title: string;
  description: PortableText[];
}

type Section = Hero | WhyKrypton | Mission | Business;

export interface HomePageData {
  seo: BaseMetaData;
  sections: Section[];
  mainBgImage: SanityImage;
}

export interface LegacyToEfficiencyData {
  _type: string;
  description: PortableTextBlock;
  flowDiagram: FlowDiagram[];
  _key: string;
  title: string;
  businessSolutions: BusinessSolution[];
  subtitle: string;
}

interface BusinessSolution {
  _type: string;
  _key: string;
  description: PortableTextBlock;
  title: string;
  icon: SanityAsset;
  link?: Link;
  name: string;
}

export interface FlowDiagram {
  _type: string;
  _key: string;
  name: string;
  platform: string;
  root: boolean;
  icon: SanityAsset;
}
