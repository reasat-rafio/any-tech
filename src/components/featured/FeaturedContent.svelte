<script lang="ts">
  import type { SanityAsset } from '@sanity/image-url/lib/types/types';
  import type { PortableTextBlock } from 'sanity';
  import H2 from '@/components/ui/H2.svelte';
  import H5 from '@/components/ui/H5.svelte';
  import Description from '@/components/ui/Description.svelte';
  import { PortableText } from '@portabletext/svelte';
  import SanityImage from '@/lib/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/helpers';
  import IntersectionObserver from 'svelte-intersection-observer';
  import MobileImage from './MobileImage.svelte';

  export let title: string;
  export let subtitle: string;
  export let description: PortableTextBlock;
  export let image: SanityAsset;
  export let mobileImgPosition: 'top' | 'bottom';

  const delay = 0;
  const duration = 1000;
  let textContainerInnerHeight = 0;
  let intersecting = false;
  let scrollY = 0;
  let windowWidth = 0;
  let windowHeight = 0;
  let rootElRef: HTMLElement;
  let positionFromTop = 0;
  $: if (rootElRef)
    positionFromTop = rootElRef.getBoundingClientRect().top + scrollY;
  $: multiplyVal = windowWidth >= 1024 ? -0.015 : -0.005;
  $: offsetYVal = Math.min(
    (positionFromTop - scrollY - windowHeight) * multiplyVal,
    13
  );

  let imageFrameRef: HTMLImageElement;
  let imageFrameMobileRef: HTMLImageElement;
  const springEasing = `cubic-bezier(0.25, 0.46, 0.45, 0.94)`;

  const windowScrollAction = () => {
    if (intersecting) {
      imageFrameRef.style.transform = `translate3d(0%, ${offsetYVal}%, 0)`;
      imageFrameRef.style.transition = `transform ${duration}ms ${springEasing} ${delay}ms`;
      imageFrameMobileRef.style.transform = `translate3d(0%, ${offsetYVal}%, 0) scaleX(1.25)`;
      imageFrameMobileRef.style.transition = `transform ${duration}ms ${springEasing} ${delay}ms`;
    }
  };
</script>

<svelte:window
  bind:scrollY
  bind:innerHeight={windowHeight}
  bind:innerWidth={windowWidth}
  on:scroll={windowScrollAction}
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
      <div bind:clientHeight={textContainerInnerHeight}>
        <H5 class="mb-[16px]">{title}</H5>
        <H2>{subtitle}</H2>

        {#if mobileImgPosition === 'top'}
          <MobileImage bind:imageFrameMobileRef {image} />
        {/if}

        <Description
          class={`${
            mobileImgPosition === 'top' ? ' mt-[52px]' : 'mt-[22px]'
          } lg:mt-[32px]`}
        >
          <PortableText value={description} />
        </Description>
        {#if mobileImgPosition === 'bottom'}
          <MobileImage bind:imageFrameMobileRef {image} />
        {/if}
      </div>
      <div
        class="relative overflow-visible lg:block hidden"
        style="max-height: {textContainerInnerHeight - 50}px;"
      >
        <img
          bind:this={imageFrameRef}
          class="absolute h-full w-full top-0 left-0 pointer-events-none"
          src="/frames/content-image-1.png"
          alt="frame"
          loading="lazy"
        />
        <SanityImage
          imageUrlBuilder={imageBuilder}
          class="h-full w-[80%] object-cover mx-auto"
          src={image}
          width="400px"
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
