// import { withDimensions } from '@/lib/helpers';
import groq from 'groq';
import { picture } from 'astro-sanity-picture';

export const intlTypeQuery = (
  schemaType: string,
  filters: string | boolean = true
) =>
  groq`coalesce(
		*[_type == "${schemaType}" && language == $locale && ${filters}][0],
		*[_type == "${schemaType}" && language == $defaultLocale && ${filters}][0],
	)`;

export const siteQuery = groq`${intlTypeQuery('site')} {
  "seo" : {
      ${picture('ogImage')},
      "favicon" : favicon.asset->url,
    },
  "header": {
    ${picture('logo')},
    navMenus
  },
  "footer": {
		${picture('logo')},
		footerContents,
    socialLinks,
		footerCopyRight,
		footerBottomLinks,
		poweredBy,
  },
}`;
export const pageQuery = (query?: string) => groq`{
	"site": ${siteQuery},
    "page": ${query}
  }`;
