<script lang="ts">
  import type {
    ImageUrlBuilderOptionsWithAliases,
    SanityImageSource,
  } from '@sanity/image-url/lib/types/types';
  import { defaultSanityImageDefaults } from './defaults';
  import { generateWidths, isSanityDimensionedImage } from './fns';
  import type { AutoWidths, Lqip, SanityImageProps } from './types';
  import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';

  import type { HTMLImgAttributes } from 'svelte/elements';

  type $$Props = SanityImageProps & Omit<HTMLImgAttributes, 'src'>;

  //Max default allows for 1920px width @ 2x
  const defaults = (globalThis.sanityImageDefaults ??=
    defaultSanityImageDefaults);

  export let imageUrlBuilder: ImageUrlBuilder | undefined =
    defaults.imageUrlBuilder;
  export let src: SanityImageSource;
  export let widths: number[] | AutoWidths = defaults.autoWidths;
  export let lqip: Lqip = defaults.lqip;
  export let options: Partial<ImageUrlBuilderOptionsWithAliases> = {};
  export let autoFormat: boolean = defaults.autoFormat;

  const builder = imageUrlBuilder
    ?.image(src)
    .withOptions({ auto: autoFormat ? 'format' : undefined });

  if (!builder) {
    throw new Error('No image url builder specified, and no default set!');
  }
  const determinedWidths = Array.isArray(widths)
    ? widths
    : generateWidths(widths ?? defaults.autoWidths, src);

  const determinedLqip = lqip ?? defaults.lqip;

  const [imgWidth, imgHeight] = isSanityDimensionedImage(src)
    ? [
        src.asset.metadata.dimensions.width,
        src.asset.metadata.dimensions.height,
      ]
    : [undefined, undefined];

  const srcset = determinedWidths
    .map(
      (w: number) =>
        `${builder
          .width(w)
          .withOptions(options ?? {})
          .url()} ${w}w`
    )
    .join(', ');
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img
  src={builder.url()}
  {srcset}
  width={imgWidth}
  height={imgHeight}
  data-x-lqip={determinedLqip.enabled ? 'true' : 'false'}
  data-x-lqip-transition-duration={determinedLqip.enabled
    ? determinedLqip.transitionDuration.toString()
    : '0'}
  {...$$restProps}
/>

<!-- <script>
  //
  const lqipImages = document.querySelectorAll<HTMLImageElement>(
    'img[data-x-lqip="true"]'
  );

  // Handle clicks on each button.
  lqipImages.forEach((img) => {
    img.addEventListener("load", () => {
      img.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: parseInt(img.dataset["xLqipTransitionDuration"]!),
        fill: "forwards",
      });
    });
    if (img.complete) {
      img.style.opacity = "1";
    }
  });
</script> -->
