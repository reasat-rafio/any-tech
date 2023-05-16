<script lang="ts">
  import type { SanityAsset } from '@sanity/image-url/lib/types/types';
  import SanityImage from '@/lib/sanity-image.svelte';
  import H1 from '@/components/ui/H1.svelte';
  import Cta from '@/components/ui/CTA.svelte';
  import type { HeroLink } from '@/lib/types/homePage';
  import { timeline } from 'motion';
  import { onMount } from 'svelte';
  import IntersectionObserver from 'svelte-intersection-observer';

  export let title: string;
  export let subtitle: string;
  export let image: SanityAsset;
  export let links: HeroLink[] | undefined = undefined;

  const delay = 0;
  const duration = 500;
  let intersecting = false;
  let waveLines2PositionX = 0;
  let mouseAnimationCanTrigger = false;
  let rootElRef: HTMLElement;
  let waveLines1Ref: HTMLObjectElement;
  let waveLinesDesktop2Ref: HTMLObjectElement;
  const springEasing = `cubic-bezier(0.25, 0.46, 0.45, 0.94)`;

  onMount(() => {
    timeline(
      [
        [
          waveLines1Ref,
          { x: ['-10%', 0], y: ['-10%', 0] },
          { easing: [0.25, 0.46, 0.45, 0.94] },
        ],
        [
          '.hero-img',
          { filter: ['blur(5px)', 'blur(0)'] },
          { easing: [0.25, 0.46, 0.45, 0.94], at: 0.1 },
        ],
        [
          waveLinesDesktop2Ref,
          { x: ['15%', 0], y: ['-10%', 0], opacity: [0, 1] },
          { at: 0.1, easing: [0.25, 0.46, 0.45, 0.94] },
        ],
      ],
      { duration: 2 }
    );
    setTimeout(() => {
      mouseAnimationCanTrigger = true;
    }, 2000);
  });

  const windowScrollAction = () => {
    if (intersecting && waveLinesDesktop2Ref) {
      waveLinesDesktop2Ref.style.transform = `translate3d(0, ${
        waveLines2PositionX * 0.01
      }%, 0)`;
      waveLinesDesktop2Ref.style.transition = `transform ${duration}ms ${springEasing} ${delay}ms`;
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
      waveLinesDesktop2Ref.style.transform = `translate3d(${
        mousePositionX * 2.5
      }%, ${mousePositionY * 2.5}%, 0)`;
      waveLinesDesktop2Ref.style.transition = `transform ${duration}ms ${springEasing} ${delay}ms`;
      waveLines1Ref.style.transform = `translate3d(${mousePositionX * -1.5}%, ${
        mousePositionY * -1.5
      }%, 0)`;
      waveLines1Ref.style.transition = `transform ${duration}ms ${springEasing} ${delay}ms`;
    }
  };
</script>

<svelte:window
  bind:scrollY={waveLines2PositionX}
  on:scroll={windowScrollAction}
  on:mousemove={windowMouseMoveAction}
/>
<IntersectionObserver element={rootElRef} bind:intersecting>
  <section
    bind:this={rootElRef}
    class="relative lg:h-[95vh] w-full bg-blue-primary text-white bg-clip-hero-container overflow-hidden pt-[160px] lg:pt-0"
  >
    <div
      class="container lg:flex w-full lg:items-center lg:justify-center h-full relative z-10"
    >
      <div class="h-fit lg:flex-[65] xl:flex-[50]">
        <header class="space-y-[25px] max-w-xl">
          <H1>{title}</H1>
          <p class="text-[18px] leading-[28.8px]">{subtitle}</p>
        </header>

        {#if !!links?.length}
          <div
            class="flex lg:flex-row flex-col lg:space-x-[16px] mt-[75px] space-y-4 lg:space-y-0 w-full pb-[220px] lg:pb-0"
          >
            {#each links as link}
              <Cta variant={link.variant} href={link.href} title={link.title} />
            {/each}
          </div>
        {/if}
      </div>
      <div class="lg:flex-[35] xl:flex-[50] lg:block hidden" />
    </div>

    <div
      class="hidden lg:block absolute top-0 xl:left-[35%] xl:w-[65%] left-1/2 lg:w-[50%] h-full bg-clip-hero-image pointer-events-none"
    >
      <SanityImage
        class="h-full w-full object-cover hero-img"
        {image}
        maxWidth={2000}
      />
      <div class="gradient-overlay" />
    </div>

    <!-- <object
      bind:this={waveLines1Ref}
      class="absolute top-0 right-0 h-full w-full object-cover"
      aria-label="background waveforms"
      type="image/svg+xml"
      data={`/backgrounds/WaveLinesDesktop1.svg`}
      >Your borwser doesn't support SVG
    </object> -->
    <object
      bind:this={waveLinesDesktop2Ref}
      class="lg:block hidden absolute bottom-0 right-0 h-[220%] w-[120%] object-bottom"
      aria-label="background waveforms"
      type="image/svg+xml"
      data={`/backgrounds/WaveLinesDesktop2.svg`}
      >Your borwser doesn't support SVG
    </object>
    <!-- <object
      class="lg:hidden block absolute bottom-0 right-0 h-full w-full object-bottom"
      aria-label="background waveforms"
      type="image/svg+xml"
      data={`/backgrounds/WaveLinesMobile2.svg`}
      >Your borwser doesn't support SVG
    </object> -->
    <object
      class="absolute lg:hidden block top-0 right-0 h-full w-full object-coverx translate-y-[-5%]"
      aria-label="background waveforms"
      type="image/svg+xml"
      data={`/backgrounds/WaveLinesMobile1.svg`}
      >Your borwser doesn't support SVG
    </object>
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
