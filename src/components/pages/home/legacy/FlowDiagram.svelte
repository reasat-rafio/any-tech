<script lang="ts">
  import type { FlowDiagram } from '@/lib/types/homePage';
  import TopLine from './lines-svg/TopLine.svelte';
  import BottomLine from './lines-svg/BottomLine.svelte';
  import LeftLine from './lines-svg/LeftLine.svelte';
  import RightLine from './lines-svg/RightLine.svelte';
  import { onMount } from 'svelte';
  import { timeline, inView } from 'motion';

  export let flowDiagram: FlowDiagram[];

  let containerRef: HTMLDivElement;
  let bigGradientRef: HTMLDivElement;
  let smallGradientRef: HTMLDivElement;

  const [rootItem, ...rest] = flowDiagram.sort(
    (a, b) => Number(b.root === true) - Number(a.root === true)
  );

  onMount(() => {
    inView(containerRef, () => {
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
        ],
        { duration: 0.8 }
      );
    });
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
    {#each rest as { name, platform, iconUrl }}
      <div
        class="flex justify-center items-center flex-col first:lg:translate-y-[calc(10%-14px)] last:lg:translate-y-[calc(10%+14px)]"
      >
        <div
          class="flex justify-center items-center flex-col rounded-full lg:w-[150px] lg:h-[150px] w-[90px] h-[90px] bg-white space-y-1 drop-shadow-ellipse"
        >
          <object
            class="lg:h-[50px] h-[30px]"
            title={name}
            type="image/svg+xml"
            data={iconUrl}
          />
          <span class="text-xs lg:text-base text-center">{name}</span>
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
    <!-- Desktop -->
    <div
      class="lg:block hidden absolute top-1/2 right-1/2 lg:-translate-y-[calc(50%+14px)] w-[60%] space-y-[35%] rotate-0 translate-y-[-20%]"
    >
      <TopLine />
      <BottomLine />
    </div>
    <!-- Mobile -->
    <div
      class="lg:hidden absolute bottom-0 translate-y-[10%] right-1/2 flex translate-x-1/2 space-x-[35%] scale-150"
    >
      <LeftLine />
      <RightLine />
    </div>

    <!-- Item -->
    <div class="flex flex-col justify-center items-center">
      <div
        class="flex justify-center items-center flex-col rounded-full lg:w-[150px] lg:h-[150px] w-[90px] h-[90px] bg-white z-20 relative drop-shadow-ellipse"
      >
        <object
          class="lg:h-[50px] h-[30px]"
          title={rootItem?.name}
          type="image/svg+xml"
          data={rootItem?.iconUrl}
        />
        <span class="z-20 relative text-xs lg:text-base text-center"
          >{rootItem?.name}</span
        >
      </div>
      <!-- ? If mt-[14px] change make sure to also update the calc func for maintain consistent positioning -->
      <span
        class="text-blue-crystal lg:text-tiny text-res-tiny mt-[14px] text-center"
        >{rootItem?.platform}</span
      >
    </div>
  </div>
</div>
