type Section = CommonHeroData | CTAData | CommonFeaturedContentData;

export interface AboutPageData {
  seo: BaseMetaData;
  sections: Section[];
}
