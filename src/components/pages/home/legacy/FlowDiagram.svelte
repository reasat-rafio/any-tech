<script lang="ts">
  import type { FlowDiagram } from '@/lib/types/homePage';
  import Top from './lines-svg/top.svelte';
  import Bottom from './lines-svg/bottom.svelte';

  export let flowDiagram: FlowDiagram[];
  const [rootItem, ...rest] = flowDiagram.sort(
    (a, b) => Number(b.root === true) - Number(a.root === true)
  );
</script>

<section class="{$$props.class} items-center justify-center relative">
  <div class="flex-1 flex flex-col justify-center items-center">
    {#each rest as { name, platform, iconUrl }}
      <div
        class="flex justify-center items-center flex-col first: last:translate-y-[calc(10%+14px)]"
      >
        <div
          style="filter: drop-shadow(0px 10px 13px #D5EEFF);"
          class="flex justify-center items-center flex-col rounded-full w-[150px] h-[150px] bg-white space-y-1"
        >
          <object
            class="h-[50px]"
            title={name}
            type="image/svg+xml"
            data={iconUrl}
          />
          <span>{name}</span>
        </div>
        <!-- ? If mt-[14px] change make sure to also update the calc func for maintain consistent positioning -->
        <span class="text-[#71A0B4] font-semibold text-[12px] mt-[14px]"
          >{platform}</span
        >
      </div>
    {/each}
  </div>

  <!-- Root Item Container -->
  <div class="flex-1 relative">
    <!-- Gradients  -->
    <div
      style="background: linear-gradient(180deg, #f0faff 0%, rgba(240, 250, 255, 0) 165.93%);"
      class="absolute top-0 right-1/2 translate-x-1/2 w-[150px] h-[150px] rounded-full scale-[2.25] -z-20 origin-center"
    />
    <div
      style="background: linear-gradient(180deg, #e5f6ff 0%, rgba(240, 250, 255, 0) 52.3%);"
      class="absolute top-0 right-1/2 w-[150px] h-[150px] rounded-full -z-10 origin-center translate-x-1/2 scale-125"
    />

    <!-- Indicator lines -->
    <div
      class="absolute top-1/2 right-1/2 -translate-y-[calc(50%+14px)] translate-x-[5%] w-[60%] space-y-[35%]"
    >
      <Top />
      <Bottom />
    </div>

    <!-- Item -->
    <div class="flex flex-col justify-center items-center">
      <div
        style="filter: drop-shadow(0px 10px 13px #D5EEFF);"
        class="flex justify-center items-center flex-col rounded-full w-[150px] h-[150px] bg-white z-20 relative"
      >
        <object
          class="h-[50px]"
          title={rootItem?.name}
          type="image/svg+xml"
          data={rootItem?.iconUrl}
        />
        <span class="z-20 relative">{rootItem?.name}</span>
      </div>
      <!-- ? If mt-[14px] change make sure to also update the calc func for maintain consistent positioning -->
      <span class="text-[#71A0B4] font-semibold text-[12px] mt-[14px]"
        >{rootItem?.platform}</span
      >
    </div>
  </div>
</section>
