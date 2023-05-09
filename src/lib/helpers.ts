import { pageQuery } from '@/lib/query';
import groq from 'groq';
import { sanityClient } from '@/utils/sanity';
import imageUrlBuilder from '@sanity/image-url';
import type { QueryParams } from 'sanity';
import type { SiteData } from '@/lib/types/site';
import type { SanityDimensionedImage } from 'astro-sanity-picture';

export const withDimensions = (img: string) => groq`${img} {
  ...,
  asset->{
    ...,
    metadata {
      lqip,
      dimensions
    }
  }
}`;

export interface PageData<T> {
  site: SiteData;
  page: T;
}

export async function getPageData<T>(
  query: string,
  params?: QueryParams
): Promise<PageData<T>> {
  const data = await sanityClient.fetch(
    pageQuery(groq`${query}`),
    params ? params : {}
  );
  return data;
}

export const imageBuilder = imageUrlBuilder(sanityClient);

export function urlForSanityImage(source: SanityDimensionedImage) {
  return imageBuilder.image(source).auto('format');
}
