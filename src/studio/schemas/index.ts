// import documents from './documents'
import editor from './editor';
import commonFeatured from './featured';
import commonHero from './hero';
import iconLink from './iconLink';
import link from './link';
import menuItem from './menuItem';
import menuItems from './menuItems';
import pages from './pages';
import seo from './seo';
import site from './site/index';

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
  commonFeatured,
  //   ...documents
];
