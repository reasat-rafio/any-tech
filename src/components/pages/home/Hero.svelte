<script lang="ts">
  import type { SanityAsset } from '@sanity/image-url/lib/types/types';
  import SanityImage from '@/lib/sanity-image.svelte';
  import H1 from '@/components/ui/H1.svelte';
  import Cta from '@/components/ui/CTA.svelte';
  import type { HeroLink } from '@/lib/types/homePage';
  import { timeline } from 'motion';
  import { onMount } from 'svelte';

  export let title: string;
  export let subtitle: string;
  export let image: SanityAsset;
  export let links: HeroLink[] | undefined = undefined;

  let waveLines1Ref: HTMLObjectElement;
  let waveLines2Ref: HTMLObjectElement;

  onMount(() => {
    timeline(
      [
        [waveLines1Ref, { x: ['-10%', 0], y: ['-10%', 0] }],
        [
          waveLines2Ref,
          { x: ['15%', '2%'], y: ['-10%', 0], opacity: [0, 1] },
          { at: 0.1 },
        ],
      ],
      { duration: 2 }
    );
  });
</script>

<section
  class="relative h-[95vh] w-full bg-blue-primary text-white bg-clip-hero-container overflow-hidden"
>
  <div
    class="container flex w-full items-center justify-center h-full relative z-10"
  >
    <div class="h-fit flex-1">
      <header class="space-y-[25px]">
        <H1>{title}</H1>
        <p class="text-[18px] leading-[28.8px]">{subtitle}</p>
      </header>

      {#if !!links?.length}
        <div class="flex space-x-[16px] mt-[75px]">
          {#each links as link}
            <Cta variant={link.variant} href={link.href} title={link.title} />
          {/each}
        </div>
      {/if}
    </div>
    <div class="flex-1" />
  </div>

  <div
    class="absolute top-0 left-[35%] w-[65%] h-full bg-clip-hero-image pointer-events-none"
  >
    <SanityImage
      class="h-full w-full object-cover ase "
      {image}
      maxWidth={2000}
    />
    <div class="gradient-overlay" />
  </div>

  <object
    bind:this={waveLines1Ref}
    class="absolute top-0 right-0 h-full w-full object-cover"
    aria-label="background waveforms"
    type="image/svg+xml"
    data={`/backgrounds/WaveLines1.svg`}
    >Your borwser doesn't support SVG
  </object>
  <object
    bind:this={waveLines2Ref}
    class="absolute bottom-0 right-0 h-[200%] w-[130%] object-bottom"
    aria-label="background waveforms"
    type="image/svg+xml"
    data={`/backgrounds/WaveLines2.svg`}
    >Your borwser doesn't support SVG
  </object>
</section>

<style>
  .gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      190deg,
      #1f80f0 15.05%,
      rgba(31, 128, 240, 0) 30.39%
    );
  }
</style>
