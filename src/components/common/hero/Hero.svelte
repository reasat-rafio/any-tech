<script lang="ts">
  import H1 from '@/components/ui/H1.svelte';
  import { timeline } from 'motion';
  import type { Easing } from 'motion';
  import { onMount } from 'svelte';
  import IntersectionObserver from 'svelte-intersection-observer';
  import Wavelines from './Wavelines.svelte';

  export let title: string;
  export let subtitle: string;

  const delay = 0;
  let scrollY = 0;
  let windowWidth = 0;
  const duration = 500;
  let mouseAnimationCanTrigger = false;
  let intersecting = false;

  let rootElRef: HTMLElement;
  let waveLines1DesktopRef: HTMLObjectElement;
  let waveLines2DesktopRef: HTMLObjectElement;
  let waveLines1MobileRef: HTMLObjectElement;
  let waveLines2MobileRef: HTMLObjectElement;

  const springEasing = `cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
  const easing: Easing = [0.25, 0.46, 0.45, 0.94];

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
    timeline(
      [
        [waveLines1DesktopRef, { x: ['-10%', 0], y: ['-10%', 0] }, { easing }],
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
  <section
    style="height: {windowWidth >= 1024
      ? 'max(620px, calc(80vh - 49px))'
      : 'auto'} ;"
    class="relative w-full bg-blue-primary text-white bg-clip-hero overflow-hidden pt-[45px] pb-[150px] md:pt-[50px] lg:pt-0 lg:pb-0"
    bind:this={rootElRef}
  >
    <div
      class="container md:flex w-full md:items-center md:justify-center h-full relative z-10"
    >
      <header class="lg:space-y-[25px] space-y-[11px] h-fit lg:flex-[75]">
        <H1 class="max-w-3xl lg:max-w-max">{title}</H1>
        <p class="text-base lg:text-lg 2xl:text-xl max-w-3xl">{subtitle}</p>
      </header>

      <div class="lg:flex-[25] lg:block hidden" />
    </div>

    <Wavelines
      bind:waveLines1DesktopRef
      bind:waveLines2DesktopRef
      bind:waveLines1MobileRef
      bind:waveLines2MobileRef
    />
  </section>
</IntersectionObserver>

<style>
  .bg-clip-hero {
    clip-path: polygon(0 0, 100% 0, 100% 81%, 0% 100%);
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    .bg-clip-hero {
      clip-path: polygon(0 0, 100% 0, 100% 76%, 0% 100%);
    }
  }
  @media (min-width: 1280px) {
    .bg-clip-hero {
      clip-path: polygon(0 0, 100% 0, 100% 63%, 0% 100%);
    }
  }
</style>
