// import { withDimensions } from '@/lib/helpers';
import groq from 'groq';
import { picture } from 'astro-sanity-picture';

export const intlTypeQuery = (
  schemaType: string | [string, string],
  filters: string | boolean = true
) => {
  if (Array.isArray(schemaType)) {
    const [type, range] = schemaType;

    return groq`[
      ...*[_type == "${type}" && language == $locale && ${filters}],
      ...*[_type == "${type}" && ${filters}] //fallback query
    ]${range}`;
  } else {
    return groq`coalesce(
		*[_type == "${schemaType}" && language == $locale && ${filters}][0],
		*[_type == "${schemaType}" && language == $defaultLocale && ${filters}][0],
		*[_type == "${schemaType}" && ${filters}][0],
	)`;
  }
};

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
