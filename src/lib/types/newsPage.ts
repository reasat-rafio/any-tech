import type { PortableTextObject } from 'sanity';

export type NavigationNewsType = {
  title: string;
  slug: string;
};
export interface NewsType {
  content: PortableTextObject;
  title: string;
  description: string;
  coverImage: SanityTitledImage;
  coverLogo: SanityTitledImage;
  seo: BaseMetaData;
  slug: string;
  next?: NavigationNewsType;
  previous?: NavigationNewsType;
}
export interface NewsCardType {
  title: string;
  description: string;
  coverImage: SanityTitledImage;
  slug: string;
}

export interface NewsPageData {
  seo: BaseMetaData;
  title: string;
  articles: NewsType[];
}
