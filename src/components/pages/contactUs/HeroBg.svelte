<script lang="ts">
  import { timeline } from 'motion';
  import type { Easing } from 'motion';
  import { onMount } from 'svelte';
  import IntersectionObserver from 'svelte-intersection-observer';
  import Wavelines from '@/components/common/hero/Wavelines.svelte';

  export let headerContainerWidthInPercentage = 75;

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
      : '600px'} ;"
    class="absolute top-0 left-0 right-0 w-full bg-blue-primary text-white bg-clip-hero overflow-hidden pt-[45px] pb-[150px] md:pt-[50px] lg:pt-0 lg:pb-0"
    bind:this={rootElRef}
  >
    <div
      class="container md:flex w-full md:items-center md:justify-center h-full relative z-10"
    >
      <header
        id="c-hero-header-container"
        style:--header-width={`${headerContainerWidthInPercentage}%`}
        class="lg:space-y-[25px] space-y-[11px] h-fit"
      />

      <div
        style="width: calc({100 - headerContainerWidthInPercentage}%);"
        class="lg:block hidden"
      />
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
  #c-hero-header-container {
    width: 100%;
  }
  .bg-clip-hero {
    clip-path: polygon(0 0, 100% 0, 100% 87%, 0 96%);
  }
  @media (min-width: 1024px) {
    #c-hero-header-container {
      width: var(--header-width);
    }
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
