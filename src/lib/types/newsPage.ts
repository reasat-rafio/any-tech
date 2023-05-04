import type { PortableTextObject } from "sanity";

export type NavigationNewsType = {
  title: string;
  slug: string;
};
export interface NewsType {
  content: PortableTextObject;
  title: string;
  description: string;
  coverImage: SanityImage;
  coverLogo: SanityImage;
  seo: BaseMetaData;
  slug: string;
  next?: NavigationNewsType;
  previous?: NavigationNewsType;
}
export interface NewsCardType {
  title: string;
  description: string;
  coverImage: SanityImage;
  slug: string;
}

export interface NewsPageData {
  seo: BaseMetaData;
  title: string;
  articles: NewsType[];
}
