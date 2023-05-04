// import documents from './documents'
import pages from "./pages";
import editor from "./editor";
import link from "./link";
import menuItem from "./menuItem";
import menuItems from "./menuItems";
import seo from "./seo";
import site from "./site/index";

export const schemaTypes = [
  ...pages,
	editor, link, menuItem, menuItems, seo, site
  //   ...documents
];
