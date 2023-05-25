<script lang="ts">
  import { timeline } from 'motion';
  import { onMount } from 'svelte';
  import Cta from '@/components/ui/CTA.svelte';

  export let title: string;
  export let subtitle: string;
  export let links: CTALink[] | undefined = undefined;

  const delay = 0;
  const duration = 500;
  let mouseAnimationCanTrigger = false;
  let waveLines1Ref: HTMLObjectElement;
  let waveLines2Ref: HTMLObjectElement;
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
          waveLines2Ref,
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

  const windowMouseMoveAction = (
    e: MouseEvent & {
      currentTarget: EventTarget & Window;
    }
  ) => {
    if (mouseAnimationCanTrigger) {
      let mousePositionX = e.clientX / window.innerWidth - 0.5;
      let mousePositionY = e.clientY / window.innerHeight - 0.5;
      waveLines2Ref.style.transform = `translate3d(${mousePositionX * 2.5}%, ${
        mousePositionY * 2.5
      }%, 0)`;
      waveLines2Ref.style.transition = `transform ${duration}ms ${springEasing} ${delay}ms`;
      waveLines1Ref.style.transform = `translate3d(${mousePositionX * -1.5}%, ${
        mousePositionY * -1.5
      }%, 0)`;
      waveLines1Ref.style.transition = `transform ${duration}ms ${springEasing} ${delay}ms`;
    }
  };
</script>

<svelte:window on:mousemove={windowMouseMoveAction} />
<section
  class="relative h-[60vh] lg:h-[530px] w-full bg-blue-primary text-white bg-clip-cta overflow-hidden bg-[url('/backgrounds/ctaMobileWaveLines.svg')] bg-no-repeat bg-cover"
>
  <div
    class="container flex w-full items-start justify-center h-full relative z-10 flex-col mt-6"
  >
    <h2
      class="font-Montserrat text-res-head-2 text-white lg:text-head-2 font-semibold mb-3"
    >
      {title}
    </h2>
    <p class="text-base lg:text-lg 2xl:text-xl lg:whitespace-pre-line mb-6">
      {subtitle}
    </p>
    {#if !!links?.length}
      <div
        class="flex lg:flex-row flex-col lg:space-x-[16px] lg:mt-2.5 space-y-4 lg:space-y-0 w-full"
      >
        {#each links as link}
          <Cta variant={link.variant} href={link.href} title={link.title} />
        {/each}
      </div>
    {/if}
  </div>

  <object
    bind:this={waveLines1Ref}
    class="absolute max-lg:bottom-0 lg:top-0 right-0 h-full w-full object-cover max-lg:hidden"
    aria-label="background waveforms"
    type="image/svg+xml"
    data={`/backgrounds/WaveLinesDesktop1.svg`}
    >Your borwser doesn't support SVG
  </object>
  <object
    bind:this={waveLines2Ref}
    class="absolute bottom-0 right-0 h-[220%] w-[120%] object-bottom max-lg:hidden"
    aria-label="background waveforms"
    type="image/svg+xml"
    data={`/backgrounds/WaveLinesDesktop2.svg`}
    >Your borwser doesn't support SVG
  </object>
</section>
