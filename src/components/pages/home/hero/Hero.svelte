<script lang="ts">
  import Cta from '@/components/ui/CTA.svelte';
  import H1 from '@/components/ui/H1.svelte';
  import SanityImage from '@/lib/sanity-image.svelte';
  import type { HeroLink } from '@/lib/types/homePage';
  import type { SanityAsset } from '@sanity/image-url/lib/types/types';
  import type { Easing } from 'motion';
  import { timeline } from 'motion';
  import { onMount } from 'svelte';
  import IntersectionObserver from 'svelte-intersection-observer';
  import Wavelines from './Wavelines.svelte';
  import { navbarHeight } from '@/store';

  export let title: string;
  export let subtitle: string;
  export let image: SanityAsset;
  export let links: HeroLink[] | undefined = undefined;

  const delay = 0;
  const duration = 500;
  let intersecting = false;
  let scrollY = 0;
  let windowWidth = 0;
  let mouseAnimationCanTrigger = false;
  let rootElRef: HTMLElement;
  let imageRef: HTMLImageElement;
  let waveLines1DesktopRef: HTMLObjectElement;
  let waveLines2DesktopRef: HTMLObjectElement;
  let waveLines1MobileRef: HTMLObjectElement;
  let waveLines2MobileRef: HTMLObjectElement;
  const springEasing = `cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
  let easing: Easing = [0.25, 0.46, 0.45, 0.94];
  $: heroVH = windowWidth >= 1280 ? '90' : windowWidth >= 1024 ? '92' : '100';

  const transformAnimation = (
    el: HTMLElement,
    { x = 0, y = 0 }: { x?: number; y?: number }
  ) => {
    if (el) {
      el.style.transform = `translate3d(${x}%, ${y}%, 0)`;
      el.style.transition = `transform ${duration}ms ${springEasing} ${delay}ms`;
    }
  };

  const windowScrollAction = () => {
    if (intersecting) {
      transformAnimation(imageRef, { y: scrollY * 0.002 });
      transformAnimation(waveLines2DesktopRef, { y: scrollY * 0.01 });
      // only runs on mobile
      transformAnimation(waveLines2MobileRef, { y: scrollY * 0.02 });
      transformAnimation(waveLines1MobileRef, { y: -scrollY * 0.01 });
    }
  };

  const windowMouseMoveAction = (
    e: MouseEvent & {
      currentTarget: EventTarget & Window;
    }
  ) => {
    if (mouseAnimationCanTrigger) {
      let mousePositionX = e.clientX / window.innerWidth - 0.5;
      let mousePositionY = e.clientY / window.innerHeight - 0.5;

      transformAnimation(waveLines1DesktopRef, {
        x: mousePositionX * -1.5,
        y: mousePositionY * -1.5,
      });
      transformAnimation(waveLines2DesktopRef, {
        x: mousePositionX * 2.5,
        y: mousePositionY * 2.5,
      });
    }
  };
  onMount(() => {
    imageRef = document.querySelector('.hero-img') as HTMLImageElement;
    timeline(
      [
        [waveLines1DesktopRef, { x: ['-10%', 0], y: ['-10%', 0] }, { easing }],
        [imageRef, { x: ['5%', 0] }, { easing, at: 0.1 }],
        [
          waveLines2DesktopRef,
          { x: ['15%', 0], y: ['-10%', 0], opacity: [0, 1] },
          { at: 0.1, easing },
        ],
      ],
      { duration: 2 }
    );
    setTimeout(() => {
      mouseAnimationCanTrigger = true;
    }, 2000);
  });
</script>

<svelte:window
  bind:scrollY
  bind:innerWidth={windowWidth}
  on:scroll={windowScrollAction}
  on:mousemove={windowMouseMoveAction}
/>
<IntersectionObserver element={rootElRef} bind:intersecting>
  <section bind:this={rootElRef}>
    <div
      style="height: {windowWidth >= 1024
        ? `calc(${heroVH}vh - ${$navbarHeight}px)`
        : 'auto'} ;"
      class="relative w-full bg-blue-primary text-white bg-clip-hero-container overflow-hidden pt-[45px] md:pt-[50px] lg:pt-0"
    >
      <div
        class="container md:flex w-full md:items-center md:justify-center h-full relative z-10"
      >
        <div class="h-fit lg:flex-[65] xl:flex-[75]">
          <header class="lg:space-y-[25px] space-y-[11px]">
            <H1 class="max-w-2xl lg:max-w-max">{title}</H1>
            <p class="text-base lg:text-lg 2xl:text-xl max-w-xl">{subtitle}</p>
          </header>

          {#if !!links?.length}
            <div
              class="flex lg:flex-row flex-col lg:space-x-[16px] lg:mt-[75px] mt-[26px] space-y-4 lg:space-y-0 w-full pb-[60%] lg:pb-0 max-w-xl"
            >
              {#each links as link}
                <Cta
                  variant={link.variant}
                  href={link.href}
                  title={link.title}
                />
              {/each}
            </div>
          {/if}
        </div>

        <div class="lg:flex-[35] xl:flex-[25] lg:block hidden" />
      </div>

      <div
        class="hidden lg:block absolute top-0 xl:left-[40%] xl:w-[60%] left-1/2 lg:w-[50%] h-full bg-clip-hero-image pointer-events-none"
      >
        <SanityImage
          class="h-full w-full object-cover hero-img translate-x-[5%]"
          {image}
          maxWidth={1000}
        />
        <div class="gradient-overlay" />
      </div>

      <Wavelines
        bind:waveLines1DesktopRef
        bind:waveLines2DesktopRef
        bind:waveLines1MobileRef
        bind:waveLines2MobileRef
      />
    </div>
  </section>
</IntersectionObserver>

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
