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

export interface BusinessSolution {
  _type: string;
  _key: string;
  description: PortableTextBlock;
  title: string;
  logo: SanityAsset;
  link?: Link;
}

export interface FlowDiagram {
  _key: string;
  logo: SanityAsset;
  platform: string;
  root: boolean;
}

export interface EasyBanking {
  title: string;
  subtitle: string;
  description: PortableTextBlock;
  integratedTechnologyFlow: IntegratedTechnologyFlow[];
}
export interface IntegratedTechnologyFlow {
  service: string;
  _type: string;
  name: string;
  _key: string;
  platform: string;
  description: PortableTextBlock;
  link?: Link;
  colors: Colors;
}

export interface Colors {
  from: Color;
  to: Color;
}

interface Color {
  hsv: Hsl;
  rgb: RGB;
  hsl: Hsl;
  alpha: number;
  _type: string;
  hex: string;
}

interface Hsl {
  h: number;
  l?: number;
  a: number;
  s: number;
  _type: string;
  v?: number;
}

interface RGB {
  g: number;
  _type: string;
  a: number;
  b: number;
  r: number;
}
