<script lang="ts">
  import { animate } from 'motion';
  import { onMount } from 'svelte';

  export let offsetYVal: number;
  export let intersecting: boolean;

  let frameContainerRef: HTMLDivElement;
  let frame1Ref: HTMLImageElement;
  let frame2Ref: HTMLImageElement;
  let frame3Ref: HTMLImageElement;
  let windowHeight = 0;
  const delay = 0;
  const duration = 700;
  const springEasing = `cubic-bezier(0.25, 0.46, 0.45, 0.94)`;

  $: y = (multiplyVal: number) => offsetYVal * multiplyVal;
  const doAnimation = (
    el: HTMLElement,
    multiplyVal: number,
    max: number | null = null
  ) => {
    el.style.transform = `translate3d(0%, ${
      max ? Math.min(y(multiplyVal), max) : y(multiplyVal)
    }%, 0)`;
    el.style.transition = `transform ${duration}ms ${springEasing} ${delay}ms`;
  };

  const windowScrollAction = () => {
    if (intersecting) {
      doAnimation(frame1Ref, -0.02);
      doAnimation(frame2Ref, -0.05);
      doAnimation(frame3Ref, -0.04, 25);
    }
  };

  const setFrameHeight = () => {
    let imageHeight = (
      document.querySelector(
        '#aboutpage-mobile-founder-image'
      ) as HTMLImageElement
    ).getBoundingClientRect().height;
    frameContainerRef.style.height = `${imageHeight}px`;
  };

  onMount(() => {
    setFrameHeight();
    animate(frameContainerRef, { opacity: [0, 1] }, { duration: 1 });
  });
</script>

<svelte:window
  bind:innerHeight={windowHeight}
  on:scroll={windowScrollAction}
  on:resize={setFrameHeight}
/>
<div
  class="absolute w-full h-full top-0 left-0 pointer-events-none opacity-0"
  bind:this={frameContainerRef}
>
  <div class="relative h-full w-full">
    <img
      bind:this={frame1Ref}
      class="absolute top-[10%] -left-[10%] max-w-[60%]"
      src="/frames/founder/1.png"
      alt="frame"
      loading="lazy"
    />
    <img
      bind:this={frame2Ref}
      class="absolute top-[5%] -right-[10%] max-w-[40%]"
      src="/frames/founder/2.svg"
      alt="frame"
      loading="lazy"
    />
    <img
      bind:this={frame3Ref}
      class="absolute -bottom-[5%] -right-[10%] max-w-[85%] -z-10"
      src="/frames/founder/3.svg"
      alt="frame"
      loading="lazy"
    />
  </div>
</div>
