<script lang="ts">
  import { urlFor } from '@/utils/sanity';
  import type { SanityAsset } from '@sanity/image-url/lib/types/types';
  import { onMount } from 'svelte';
  export let image: SanityAsset;
  export let maxWidth = 600;
  export let alt: string | undefined = undefined;

  $: width = 0;
  $: height = 0;

  $: {
    if (image?.asset?.metadata?.dimensions) {
      width = image?.asset?.metadata?.dimensions.width;
      height = image?.asset?.metadata?.dimensions.height;
    } else {
      let dimensions = image?.asset?._ref?.split('-')[2];
      let [w, h] = dimensions?.split('x').map(Number);
      width = w;
      height = h;
    }
  }

  $: aspectRatio = width / height;
  let imageRef: HTMLImageElement;
  let loaded = false;
  onMount(() => {
    imageRef.onload = () => {
      loaded = true;
    };
  });

  const src: any = urlFor(image).width(maxWidth).fit('fillmax').auto('format');
</script>

{#if image}
  <img
    loading="lazy"
    {src}
    alt={alt || image?.alt || 'image'}
    class:loaded
    class={$$props.class}
    bind:this={imageRef}
    style="aspect-ratio: {aspectRatio};"
  />
{/if}
