import type { PortableText } from 'astro-portabletext';
export interface AboutPageProps {
  seo: BaseMetaData;
  title: string;
}
export interface AboutHeroProps {
  _type: 'about.hero';
  title: string;
  body: PortableText;
  image: SanityTitledImage;
}

export interface OurPeoplePerson {
  name: string;
  role: string;
  image: SanityTitledImage;
  slug: string;
}

export interface OurPeoplePageProps {
  ourPeople: OurPeoplePerson[];
  seo: BaseMetaData;
  title: string;
}

export interface CareersPageProps {
  ourPeople: OurPeoplePerson[];
  seo: BaseMetaData;
  title: string;
}
