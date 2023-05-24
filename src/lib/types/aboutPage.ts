type Section = CommonHeroData | CommonFeaturedContentData;

export interface AboutPageData {
  seo: BaseMetaData;
  sections: Section[];
}
