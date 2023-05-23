// import documents from './documents'
import pages from './pages';
import editor from './editor';
import link from './link';
import iconLink from './iconLink';
import menuItem from './menuItem';
import menuItems from './menuItems';
import seo from './seo';
import site from './site/index';
import commonHero from './hero';

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
  //   ...documents
];
