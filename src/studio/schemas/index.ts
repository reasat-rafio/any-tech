// import documents from './documents'
import editor from './editor';
import commonHero from './hero';
import iconLink from './iconLink';
import link from './link';
import menuItem from './menuItem';
import menuItems from './menuItems';
import pages from './pages';
import seo from './seo';
import site from './site/index';
import commonCta from './cta';

export const schemaTypes = [
  ...pages,
  editor,
  link,
  menuItem,
  menuItems,
  seo,
  site,
  iconLink,
  commonHero,
  commonCta,
  //   ...documents
];
