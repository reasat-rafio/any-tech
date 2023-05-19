interface RegularMail {
  address: PortableText[];
  privacyOfficer: PortableText[];
}

export interface PrivacyNoticeData {
  seo: BaseMetaData;
  title: string;
  description: PortableText[];
  regularMail: RegularMail;
}

export interface RegulatoryLegalData {
  seo: BaseMetaData;
  description: PortableText[];
}

export interface ComplaintsHandlingProcedureData {
  seo: BaseMetaData;
  description: PortableText[];
}

interface ContactDetail {
  title: string;
  description: PortableText[];
  iconDescriptions: {
    icon: SanityTitledImage;
    description: PortableText[];
  }[];
}

export interface ContactUsData {
  seo: BaseMetaData;
  title: string;
  contactDetailsTitle: string;
  contactDetails: ContactDetail[];
  contactForm: {
    title: string;
    description: PortableText[];
  };
}

export interface KycPageData {
  seo: BaseMetaData;
  title: string;
}
export interface Error404Data {
  seo: BaseMetaData;
  title: string;
  description: PortableText[];
  button: Link;
}
