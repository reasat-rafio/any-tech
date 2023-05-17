import {
  SanityImageDimensions,
  SanityImageWithAssetStub,
  SanityReference,
} from '@sanity/image-url/lib/types/types';
import type { SanityDimensionedImage } from 'astro-sanity-picture/src/types';

declare global {
  interface PortableText {
    _key: string;
    _type: string;
    children: Child[];
    markDefs: any[];
    style: string;
  }

  interface Link {
    title: string;
    href: string;
    _key: string;
  }

  interface iconLink {
    icon: SanityImage;
    href: string;
    _key: string;
  }

  type SanityImage = SanityDimensionedImage & { alt?: string; title?: string };

  export interface BaseMetaData {
    title?: string;
    description?: string;
    url?: string;
    seoImage?: SanityDimensionedImage;
  }

  type IconVariants = 'ChevronRight' | 'ChevronRightWhite';
}
