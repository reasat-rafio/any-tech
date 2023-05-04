export interface ServiceSection {
  title: string;
  image: SanityImage;
  service: any[];
  index: number;
  _type: "service.section";
}

export interface ServiceContact {
  _type: "service.contact";
  title: string;
  description: string;
}

type ServiceSections = ServiceSection | ServiceContact;
export interface ServicePageData {
  sections: ServiceSections[];
  seo: BaseMetaData;
  title: string;
}
