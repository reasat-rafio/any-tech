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

  export let title: string;
  export let subtitle: string;
  export let description: PortableTextBlock;
  export let image: SanityAsset;

  const delay = 0;
  const duration = 500;
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
    class="{$$props.class} container pb-[50px] lg:pb-[150px] overflow-x-hidden lg:overflow-x-visible"
  >
    <article
      class="grid grid-cols-1 lg:grid-cols-2 pb-[24px] lg:pb-0 lg:gap-x-[30px]"
    >
      <div bind:clientHeight={textContainerInnerHeight}>
        <H5 class="mb-[16px]">{title}</H5>
        <H2>{subtitle}</H2>

        <div class="mt-[32px] relative overflow-visible lg:hidden">
          <img
            bind:this={imageFrameMobileRef}
            class="absolute h-full w-full top-0 left-0 pointer-events-none scale-x-125"
            src="/frames/content-image-1.png"
            alt="frame"
            loading="lazy"
          />
          <SanityImage
            imageUrlBuilder={imageBuilder}
            class="h-full w-full object-cover mx-auto"
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

        <Description class="lg:mt-[32px] mt-[52px]">
          <PortableText value={description} />
        </Description>
      </div>
      <div
        class="relative overflow-visible lg:block hidden"
        style="max-height: {textContainerInnerHeight}px;"
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
          width="450px"
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
