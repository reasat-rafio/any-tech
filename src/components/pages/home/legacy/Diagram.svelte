<script lang="ts">
  import type { EfficiencyDiagram } from '@/lib/types/homePage';

  import WaveLinseDesktopTop from '/icons/diagram-lines/WaveLinseDesktopTop.svg';
  import WaveLinseDesktopBottom from '/icons/diagram-lines/WaveLinseDesktopBottom.svg';
  import WaveLinseMobileLeft from '/icons/diagram-lines/WaveLinseMobileLeft.svg';
  import WaveLinseMobileRight from '/icons/diagram-lines/WaveLinseMobileRight.svg';

  import { onMount } from 'svelte';
  import { timeline, inView } from 'motion';
  import SanityImage from '@/lib/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/helpers';

  export let diagram: EfficiencyDiagram[];

  let containerRef: HTMLDivElement;
  let indicatorLineContainerRef: HTMLDivElement;
  let bigGradientRef: HTMLDivElement;
  let smallGradientRef: HTMLDivElement;

  const [rootItem, ...rest] = diagram.sort(
    (a, b) => Number(b.root === true) - Number(a.root === true)
  );

  onMount(() => {
    inView(
      containerRef,
      () => {
        timeline(
          [
            [
              smallGradientRef,
              { x: '50%', opacity: [0, 1], scale: [0, 1.25] },
              { x: { duration: 0 } },
            ],
            [
              bigGradientRef,
              { x: '50%', scale: [0, 2], opacity: [0, 1] },
              { x: { duration: 0 } },
            ],
            [indicatorLineContainerRef, { opacity: [0, 1] }, { at: 0.5 }],
          ],
          { duration: 2 }
        );
      },
      { margin: '-200px' }
    );
  });
</script>

<!-- ? This component uses a gradient that is 90px in height, and since it is positioned absolutely, we need to set a margin-top of 45px to ensure that the component is properly positioned and does not overflow its container. -->
<div
  bind:this={containerRef}
  class="flex relative items-center justify-center flex-col-reverse lg:flex-row mt-[45px] lg:mt-0 h-full"
>
  <div
    class="flex-1 flex lg:flex-col justify-center items-center space-x-[50%] lg:space-x-0 mt-3 lg:mt-0"
  >
    {#each rest as { platform, logo }}
      <div
        class="flex justify-center items-center flex-col first:lg:translate-y-[calc(10%-14px)] last:lg:translate-y-[calc(10%+14px)]"
      >
        <div
          class="flex justify-center items-center flex-col rounded-full lg:w-[150px] lg:h-[150px] w-[90px] h-[90px] bg-white space-y-1 drop-shadow-ellipse"
        >
          <SanityImage
            imageUrlBuilder={imageBuilder}
            class="h-[50%] object-contain"
            src={logo}
            alt={logo.alt}
            sizes="(max-width: 1024px) 90px, 150px"
          />
        </div>
        <!-- ? If mt-[14px] change make sure to also update the calc func for maintain consistent positioning -->
        <span
          class="text-blue-crystal lg:text-tiny text-res-tiny mt-[14px] text-center"
          >{platform}</span
        >
      </div>
    {/each}
  </div>

  <!-- Root Item Container -->
  <div class="flex-1 relative overflow-visible">
    <!-- Gradients  -->
    <div
      bind:this={bigGradientRef}
      style="background: linear-gradient(180deg, #f0faff 0%, rgba(240, 250, 255, 0) 165.93%);"
      class="absolute top-0 right-1/2 lg:w-[150px] lg:h-[150px] w-[90px] h-[90px] rounded-full -z-20 origin-center opacity-0"
    />
    <div
      bind:this={smallGradientRef}
      style="background: linear-gradient(180deg, #e5f6ff 0%, rgba(240, 250, 255, 0) 52.3%);"
      class="absolute top-0 right-1/2 lg:w-[150px] lg:h-[150px] w-[90px] h-[90px] rounded-full -z-10 origin-center opacity-0"
    />

    <!-- Indicator lines -->
    <div class="opacity-0" bind:this={indicatorLineContainerRef}>
      <!-- Desktop -->
      <div
        class="lg:block hidden absolute top-1/2 right-1/2 lg:-translate-y-[calc(50%+14px)] w-[60%] space-y-[35%] rotate-0 translate-y-[-20%]"
      >
        <object
          aria-label="gradient-line"
          type="image/svg+xml"
          data={WaveLinseDesktopTop}
        />
        <object
          aria-label="gradient-line"
          type="image/svg+xml"
          data={WaveLinseDesktopBottom}
        />
      </div>
      <!-- Mobile -->
      <div
        class="lg:hidden absolute bottom-0 translate-y-[15%] right-1/2 flex w-full justify-center items-center translate-x-1/2 space-x-[35%]"
      >
        <object
          aria-label="gradient-line"
          type="image/svg+xml"
          data={WaveLinseMobileLeft}
        />
        <object
          aria-label="gradient-line"
          type="image/svg+xml"
          data={WaveLinseMobileRight}
        />
      </div>
    </div>

    <!-- Item -->
    {#if rootItem}
      <div class="flex flex-col justify-center items-center">
        <div
          class="flex justify-center items-center flex-col rounded-full lg:w-[150px] lg:h-[150px] w-[90px] h-[90px] bg-white z-20 relative drop-shadow-ellipse"
        >
          <SanityImage
            imageUrlBuilder={imageBuilder}
            class="h-[50%] object-contain"
            src={rootItem.logo}
            alt={rootItem.logo.alt}
            sizes="(max-width: 1024px) 90px, 150px"
          />
        </div>
        <!-- ? If mt-[14px] change make sure to also update the calc func for maintain consistent positioning -->
        <span
          class="text-blue-crystal lg:text-tiny text-res-tiny mt-[14px] text-center"
          >{rootItem.platform}</span
        >
      </div>
    {/if}
  </div>
</div>
