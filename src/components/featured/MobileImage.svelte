<script lang="ts">
  import { imageBuilder } from '@/lib/helpers';
  import SanityImage from '@/lib/sanity-image/sanity-image.svelte';
  import type { SanityAsset } from '@sanity/image-url/lib/types/types';

  export let image: SanityAsset;
  export let imageFrameMobileRef: HTMLImageElement;
</script>

<div class="mt-[32px] relative overflow-visible lg:hidden">
  <img
    bind:this={imageFrameMobileRef}
    class="absolute h-full w-full top-0 left-0 pointer-events-none scale-x-125 object-fill"
    src="/frames/content-image-1.png"
    alt="frame"
    loading="lazy"
  />
  <SanityImage
    imageUrlBuilder={imageBuilder}
    class="h-full w-full object-cover mx-auto max-h-[500px]"
    src={image}
    width="250px"
    alt={image?.alt}
  />
  {#if image?.title}
    <div
      class="ml-auto block w-fit mr-[10%] font-bold text-[12px] tacking-[0.16em] uppercase text-white relative z-10 pt-[24px]"
    >
      {image.title}
    </div>
  {/if}
</div>
