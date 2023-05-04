export interface PersonType {
  bio: any;
  email: string;
  image: SanityImage;
  name: string;
  phone: string;
  role: string;
  seo: BaseMetaData;
  linkedin: string;
  vcf: string;
  callbackBtn: {
    title: string;
    href: string;
  };
}
