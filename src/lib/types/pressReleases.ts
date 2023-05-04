import type { NewsType } from "./newsPage";

export interface PressReleasesPageData {
    seo: BaseMetaData;
    title: string;
    articles: NewsType[];
  }
  