<script lang="ts">
  import type { FlowDiagram } from '@/lib/types/homePage';
  import Top from './lines-svg/top.svelte';
  import Bottom from './lines-svg/bottom.svelte';
  import Left from './lines-svg/left.svelte';
  import Right from './lines-svg/right.svelte';

  export let flowDiagram: FlowDiagram[];

  const [rootItem, ...rest] = flowDiagram.sort(
    (a, b) => Number(b.root === true) - Number(a.root === true)
  );
</script>

<!-- ? This component uses a gradient that is 150px in height, and since it is positioned absolutely, we need to set a margin-top of 45px to ensure that the component is properly positioned and does not overflow its container. -->
<div
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
          style="filter: drop-shadow(0px 10px 13px #D5EEFF);"
          class="flex justify-center items-center flex-col rounded-full lg:w-[150px] lg:h-[150px] w-[90px] h-[90px] bg-white space-y-1"
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
          class="text-[#71A0B4] font-semibold lg:text-[12px] text-[9px] mt-[14px] text-center"
          >{platform}</span
        >
      </div>
    {/each}
  </div>

  <!-- Root Item Container -->
  <div class="flex-1 relative overflow-visible">
    <!-- Gradients  -->
    <div
      style="background: linear-gradient(180deg, #f0faff 0%, rgba(240, 250, 255, 0) 165.93%);"
      class="absolute top-0 right-1/2 translate-x-1/2 lg:w-[150px] lg:h-[150px] w-[90px] h-[90px] rounded-full lg:scale-[2.25] scale-[2] -z-20 origin-center"
    />
    <div
      style="background: linear-gradient(180deg, #e5f6ff 0%, rgba(240, 250, 255, 0) 52.3%);"
      class="absolute top-0 right-1/2 lg:w-[150px] lg:h-[150px] w-[90px] h-[90px] rounded-full -z-10 origin-center translate-x-1/2 scale-125"
    />

    <!-- Indicator lines -->
    <div
      class="lg:block hidden absolute top-1/2 right-1/2 lg:-translate-y-[calc(50%+14px)] translate-x-[5%] w-[60%] space-y-[35%] rotate-0 translate-y-[-20%]"
    >
      <Top />
      <Bottom />
    </div>
    <div
      class="lg:hidden absolute bottom-0 right-1/2 flex translate-x-1/2 space-x-[35%] scale-150"
    >
      <Left />
      <Right />
    </div>

    <!-- Item -->
    <div class="flex flex-col justify-center items-center">
      <div
        style="filter: drop-shadow(0px 10px 13px #D5EEFF);"
        class="flex justify-center items-center flex-col rounded-full lg:w-[150px] lg:h-[150px] w-[90px] h-[90px] bg-white z-20 relative"
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
        class="text-[#71A0B4] font-semibold lg:text-[12px] text-[9px] mt-[14px] text-center"
        >{rootItem?.platform}</span
      >
    </div>
  </div>
</div>
