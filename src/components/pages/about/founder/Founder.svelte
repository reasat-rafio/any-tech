<script lang="ts">
  import Description from '@/components/ui/Description.svelte';
  import H2 from '@/components/ui/H2.svelte';
  import H5 from '@/components/ui/H5.svelte';
  import { imageBuilder } from '@/lib/helpers';
  import SanityImage from '@/lib/sanity-image/sanity-image.svelte';
  import { PortableText } from '@portabletext/svelte';
  import type { SanityAsset } from '@sanity/image-url/lib/types/types';
  import type { PortableTextBlock } from 'sanity';
  import IntersectionObserver from 'svelte-intersection-observer';
  import DesktopImgFrame from './DesktopImgFrame.svelte';
  import MobileImgFrame from './MobileImgFrame.svelte';

  export let title: string;
  export let subtitle: string;
  export let description: PortableTextBlock;
  export let image: SanityAsset;

  let intersecting = false;
  let scrollY = 0;
  let windowWidth = 0;
  let windowHeight = 0;
  let rootElRef: HTMLElement;

  let positionFromTop = 0;
  $: positionFromTop = rootElRef?.getBoundingClientRect().top + scrollY;
  $: offsetYVal = positionFromTop - scrollY - windowHeight;
</script>

<svelte:window
  bind:scrollY
  bind:innerHeight={windowHeight}
  bind:innerWidth={windowWidth}
  on:resize={() => (positionFromTop = rootElRef?.getBoundingClientRect().top)}
/>
<IntersectionObserver element={rootElRef} bind:intersecting>
  <section
    bind:this={rootElRef}
    class="{$$props.class} container pt-[25px] pb-[50px] lg:pb-[150px] overflow-x-hidden lg:overflow-x-visible"
  >
    <article
      class="grid grid-cols-1 lg:grid-cols-2 pb-[24px] lg:pb-0 lg:gap-x-[30px]"
    >
      <div>
        <H5 class="mb-[16px]">{title}</H5>
        <H2>{subtitle}</H2>
        <Description class="lg:mt-[32px] mt-[22px]">
          <PortableText value={description} />
        </Description>
        <div class="mt-[32px] relative overflow-visible lg:hidden">
          {#if windowWidth < 1028}
            <MobileImgFrame {offsetYVal} {intersecting} />
          {/if}

          <SanityImage
            id="aboutpage-mobile-founder-image"
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
      </div>
      <div class="relative overflow-visible lg:block hidden">
        {#if windowWidth >= 1028}
          <DesktopImgFrame {offsetYVal} {intersecting} />
        {/if}

        <SanityImage
          id="aboutpage-desktop-founder-image"
          imageUrlBuilder={imageBuilder}
          class="h-full w-[80%] object-cover mx-auto"
          src={image}
          width="200px"
          alt={image?.alt}
        />
        {#if image?.title}
          <div
            class="ml-auto block w-fit mr-[20%] font-bold text-[16px] tacking-[0.16em] uppercase text-white relative z-10 pt-[24px]"
          >
            {image.title}
          </div>
        {/if}
      </div>
    </article>
  </section>
</IntersectionObserver>
