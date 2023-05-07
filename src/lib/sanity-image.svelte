<script lang="ts">
  import { urlFor } from '@/utils/sanity';
  import type { SanityAsset } from '@sanity/image-url/lib/types/types';
  import { onMount } from 'svelte';
  export let image: SanityAsset;
  export let maxWidth = 1200;
  export let draggable = true;
  export let alt: string | undefined = undefined;
  $: dimensions = image?.asset?._ref?.split('-')[2];
  $: [width, height] = dimensions.split('x').map(Number);
  $: aspectRatio = width / height;
  let imageRef: HTMLImageElement;
  let loaded = false;
  onMount(() => {
    imageRef.onload = () => {
      loaded = true;
    };
  });
  const src: any = urlFor(image).width(maxWidth).fit('fillmax');
</script>

{#if image}
  <img
    loading="lazy"
    {src}
    {draggable}
    alt={alt || image?.alt || 'image'}
    class:loaded
    class={$$props.class}
    bind:this={imageRef}
    style="aspect-ratio: {aspectRatio};"
  />
{/if}
