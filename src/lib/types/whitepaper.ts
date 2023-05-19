import type { NewsType } from './newsPage';
import type { PortableTextObject } from 'sanity';

export interface WhitePaperHeroType {
  title: string;
  description: PortableTextObject;
  image: SanityTitledImage;
  file: {
    title: string;
    href: string;
  };
}

export interface WhitePaperPageData {
  seo: BaseMetaData;
  title: string;
  hero: WhitePaperHeroType;
  articles: NewsType[];
}
