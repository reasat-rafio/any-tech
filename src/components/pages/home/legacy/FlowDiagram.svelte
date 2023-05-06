<script lang="ts">
  import type { FlowDiagram } from '@/lib/types/homePage';
  import Top from './lines-svg/top.svelte';
  import Bottom from './lines-svg/bottom.svelte';

  export let flowDiagram: FlowDiagram[];
  const [rootItem, ...rest] = flowDiagram.sort(
    (a, b) => Number(b.root === true) - Number(a.root === true)
  );
</script>

<section
  class="{$$props.class} grid grid-cols-2 items-center relative [&>*]:border"
>
  <div class="flex flex-col justify-center items-center space-y-5 [&>*]:border">
    {#each rest as { name, platform, iconUrl }}
      <div class="flex justify-center items-center flex-col">
        <div
          style="filter: drop-shadow(0px 10px 13px #D5EEFF);"
          class="flex justify-center items-center flex-col rounded-full w-[150px] h-[150px] bg-white"
        >
          <svg class="h-[50px]" xmlns="http://www.w3.org/2000/svg">
            <foreignObject width="100%" height="100%">
              <iframe
                title={name}
                src={iconUrl}
                style="width: 100%; height: 100%;"
              />
            </foreignObject>
          </svg>
          <span>{name}</span>
        </div>
        <span>{platform}</span>
      </div>
    {/each}
  </div>
  <!-- Root Item -->
  <div>
    <div class="flex justify-center items-center flex-col">
      <div
        style="filter: drop-shadow(0px 10px 13px #D5EEFF);"
        class="flex justify-center items-center flex-col rounded-full w-[150px] h-[150px] bg-white"
      >
        <svg class="h-[50px]" xmlns="http://www.w3.org/2000/svg">
          <foreignObject width="100%" height="100%">
            <iframe
              title={rootItem?.name}
              src={rootItem?.iconUrl}
              style="width: 100%; height: 100%;"
            />
          </foreignObject>
        </svg>
        <span>{rootItem?.name}</span>
      </div>
      <span>{rootItem?.platform}</span>
    </div>
  </div>
  <!-- Indicator lines -->
  <div class="absolute top-1/2 right-[30%] space-y-10 -translate-y-1/2 w-[30%]">
    <Top class="w-full" />
    <Bottom class="w-full" />
  </div>
</section>
