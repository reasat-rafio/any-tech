<script lang="ts">
  import type { SanityAsset } from '@sanity/image-url/lib/types/types';
  import SanityImage from '@/lib/sanity-image.svelte';
  import H1 from '@/components/ui/H1.svelte';
  import Cta from '@/components/ui/CTA.svelte';
  import type { HeroLink } from '@/lib/types/homePage';

  export let title: string;
  export let subtitle: string;
  export let image: SanityAsset;
  export let links: HeroLink[] | undefined = undefined;
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

      {#if !!links?.length}
        <div class="flex space-x-[16px] mt-[45px]">
          {#each links as link}
            <Cta variant={link.variant} href={link.href} title={link.title} />
          {/each}
        </div>
      {/if}
    </div>
    <div class="flex-1" />
  </div>

  <div class="absolute top-0 left-[35%] w-[65%] h-full bg-clip-hero-image">
    <SanityImage class="h-full w-full object-cover" {image} maxWidth={2000} />
  </div>
</section>
