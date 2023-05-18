import type { SanityAsset } from '@sanity/image-url/lib/types/types';
import type { PortableTextBlock } from 'sanity';

type Section = Hero | LegacyToEfficiency | EasyBanking | Cta | TrustedBy;
export interface Mission {
  _type: string;
  title: string;
  description: PortableText[];
}

export interface Business {
  _type: 'homePage.business';
  title: string;
  description: PortableText[];
}

export interface Detail {
  frontSymbol: string;
  number: number;
  backSymbol: string;
  description: string;
}

export interface TrustedBy {
  _type: 'homePage.trustedBy';
  title: string;
  details: Detail[];
  logos: SanityImage[];
}

export interface HomePageData {
  seo: BaseMetaData;
  sections: Section[];
  mainBgImage: SanityImage;
}

export interface HeroLink extends Link {
  variant: 'outline' | 'solid';
}
export interface Hero {
  _type: string;
  _key: string;
  subtitle: string;
  title: string;
  image: SanityAsset;
  links?: HeroLink[];
}

export interface LegacyToEfficiency {
  _type: string;
  description: PortableTextBlock;
  diagram: EfficiencyDiagram[];
  _key: string;
  title: string;
  image: SanityImage;
  solutions: EfficiencySolution[];
  subtitle: string;
}

export interface EfficiencySolution {
  _type: string;
  _key: string;
  description: PortableTextBlock;
  title: string;
  logo: SanityAsset;
  link?: Link;
}

export interface EfficiencyDiagram {
  _key: string;
  logo: SanityAsset;
  platform: string;
  root: boolean;
}

export interface EasyBanking {
  _key: string;
  _type: string;
  title: string;
  subtitle: string;
  description: PortableTextBlock;
  diagram: BankingDiagram[];
  solutions: BankingSolution;
}

export interface BankingSolution {
  _type: string;
  _key: string;
  description: PortableTextBlock;
  name?: string;
  platform: string;
  link?: Link;
  image: SanityImage;
}
export interface BankingDiagram {
  _type: string;
  name: string;
  _key: string;
  platform: string;
  service: string;
  colors: Colors;
}

export interface Cta {
  _type: 'homePage.cta';
  title: string;
  subtitle: string;
  button: Link;
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
