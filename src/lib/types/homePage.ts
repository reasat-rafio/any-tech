import type { SanityDimensionedImage } from "astro-sanity-picture";

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
  _type: "homePage.business";
  title: string;
  description: PortableText[];
}

type Section = Hero | WhyKrypton | Mission | Business;

export interface HomePageData {
  seo: BaseMetaData;
  sections: Section[];
  mainBgImage: SanityImage;
}
