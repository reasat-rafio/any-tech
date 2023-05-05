import type { SanityDimensionedImage } from 'astro-sanity-picture';

export interface SiteData {
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
export interface FooterProps {
  logo: SanityDimensionedImage;
  footerContents: FooterLinks[];
  socialLinks: iconLink[];
  footerCopyRight: PortableText[];
  footerBottomLinks: Link[];
}
