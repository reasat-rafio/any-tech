export interface ImageDescription {
  description: PortableText[];
  image: SanityTitledImage;
  imageLeft: boolean;
}

export interface SystemPageData {
  seo: BaseMetaData;
  title: string;
  sections: ImageDescription[];
}

export interface ClientPortalData {
  seo: BaseMetaData;
  title: string;
  description: PortableText[];
}
