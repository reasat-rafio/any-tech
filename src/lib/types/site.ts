import type { SanityDimensionedImage } from "astro-sanity-picture";

export interface SiteData {
  cookie: {
      btn : string;
      message : string;
  };
  seo: {
    ogImage: SanityDimensionedImage;
    favicon: string;
  };
  header: {
    logo: SanityDimensionedImage;
    navMenus: NavMenu[];
  };
  footer: FooterProps;
}
export interface SiteLayout {
  seo: BaseMetaData;
  site: SiteData;
}
export interface NavMenu {
  href: string;
  title: string;
  subMenus: Link[];
  _key: string;
}

export interface FooterLinks {
  _type: string;
  title: string;
  links: Link[];
}

export interface FooterContent {
  _type: string;
  title: string;
  description: PortableText[];
}

export interface FooterProps {
  footerContents: (FooterLinks | FooterContent)[];
  footerLogo: SanityDimensionedImage;
  footerCopyRight: PortableText[];
}
