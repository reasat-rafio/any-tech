// import { withDimensions } from '@/lib/helpers';
import groq from "groq";
import { picture } from "astro-sanity-picture";

export const siteQuery = groq`{
  "seo" :
    *[_type=='site'][0]{
      ${picture("ogImage")},
      "favicon" : favicon.asset->url,
    },
  "cookie" : *[_type=='site'][0].cookie,
  "header": *[_type=='site'][0]{
    ${picture("logo")},
    navMenus
  },
  "footer": *[_type=='site'][0]{
      footerCopyRight,
      footerContents,
      ${picture("footerLogo")},
  },
}`;
export const pageQuery = (query?: string) => groq`{
	"site": ${siteQuery},
    "page": ${query}
  }`;
