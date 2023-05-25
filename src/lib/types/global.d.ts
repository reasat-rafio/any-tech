import {
  SanityAsset,
  SanityImageDimensions,
  SanityImageWithAssetStub,
  SanityReference,
} from '@sanity/image-url/lib/types/types';
import type { SanityDimensionedImage } from 'astro-sanity-picture/src/types';
import type { PortableTextBlock } from 'sanity';

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
    icon: SanityTitledImage;
    href: string;
    _key: string;
  }

  type SanityTitledImage = SanityDimensionedImage & {
    alt?: string;
    title?: string;
  };

  export interface BaseMetaData {
    title?: string;
    description?: string;
    url?: string;
    seoImage?: SanityDimensionedImage;
  }

  interface CommonHeroData {
    _key: string;
    _type: 'common.hero';
    title: string;
    subtitle: string;
    headerContainerWidthInPercentage?: number;
  }
  interface CommonFeaturedContentData {
    _key: string;
    _type: 'common.featured';
    title: string;
    subtitle: string;
    description: PortableTextBlock;
    image: SanityImageDimensions;
    mobileImgPosition: 'top' | 'bottom';
  }

  export interface CTALink extends Link {
    variant: 'outline' | 'solid';
  }

  export interface CTAData {
    _type: 'common.cta';
    title: string;
    subtitle: string;
    links: CTALink[];
  }

  type IconVariants =
    | 'ChevronRight'
    | 'ChevronRightWhite'
    | 'CarouselChevronLeft'
    | 'CarouselChevronRight';
}
