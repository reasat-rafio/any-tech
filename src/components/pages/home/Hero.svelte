<script lang="ts">
  import type { SanityAsset } from '@sanity/image-url/lib/types/types';
  import SanityImage from '@/lib/sanity-image.svelte';
  import H1 from '@/components/ui/H1.svelte';

  export let title: string;
  export let subtitle: string;
  export let image: SanityAsset;
</script>

<section
  class="relative h-screen w-full bg-blue-primary text-white bg-clip-hero-container"
>
  <div class="container flex w-full items-center justify-center h-full">
    <div class="h-fit flex-1">
      <header class="space-y-[25px]">
        <H1>{title}</H1>
        <p class="text-[18px] leading-[28.8px]">{subtitle}</p>
      </header>
    </div>
    <div class="flex-1" />
  </div>

  <div class="absolute top-0 left-[35%] w-[65%] h-full bg-clip-hero-image">
    <SanityImage class="h-full w-full object-cover" {image} maxWidth={2000} />
  </div>
</section>
