<script lang="ts">
  import type { IntegratedTechnologyFlow } from '@/lib/types/homePage';
  import Technology from './Technology.svelte';
  export let integratedTechnologyFlow: IntegratedTechnologyFlow[];

  let [firstTech, secondTech, thirdTech, forthTech] = integratedTechnologyFlow;
</script>

<section class="{$$props.class} flex flex-col space-y-[19px] text-center">
  <div
    class="py-[26px] px-[20px] xl:px-[78px] xl:py-[29px] bg-[#FAFAFA] lg:rounded-[36px] rounded-md relative"
  >
    <div class="mb-[20px] w-fit mx-auto">
      {#if !!firstTech}
        <Technology
          name={firstTech.name}
          platform={firstTech.platform}
          service={firstTech.service}
          colors={firstTech.colors}
        />
      {/if}
    </div>

    <object
      class="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2"
      aria-label="bridge"
      type="image/svg+xml"
      data={`/icons/easy-banking/Bridge.svg`}
      >Your borwser doesn't support SVG
    </object>
    <object
      class="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 h-[25%]"
      aria-label="bridge"
      type="image/svg+xml"
      data={`/icons/easy-banking/Line1.svg`}
      >Your borwser doesn't support SVG
    </object>
  </div>

  <div
    class="flex-1 bg-[#FAFAFA] xl:rounded-[36px] rounded-[16px] py-[26px] px-[20px] xl:px-[78px] xl:py-[29px] flex flex-col justify-center items-center w-full lg:space-y-[40px] space-y-[20px] mt-[20px]"
  >
    <div class="relative w-fit overflow-visible">
      {#if secondTech}
        <Technology
          class="relative z-10"
          name={secondTech.name}
          platform={secondTech.platform}
          service={secondTech.service}
          colors={secondTech.colors}
        />
      {/if}
      <div class="absolute top-[35%] left-0 w-full h-[75%] flex">
        <object
          class="flex-1 -translate-x-1/4 md:-translate-x-1/3"
          aria-label="bridge"
          type="image/svg+xml"
          data={`/icons/easy-banking/Line2.svg`}
          >Your borwser doesn't support SVG
        </object>
        <object
          class="flex-1 translate-x-1/4 md:translate-x-1/3"
          aria-label="bridge"
          type="image/svg+xml"
          data={`/icons/easy-banking/Line3.svg`}
          >Your borwser doesn't support SVG
        </object>
      </div>
    </div>

    <div class="flex relative">
      {#if thirdTech}
        <Technology
          class="flex-1 "
          name={thirdTech.name}
          platform={thirdTech.platform}
          service={thirdTech.service}
          colors={thirdTech.colors}
        />
      {/if}

      <object
        class="w-[15%] -translate-y-[20%]"
        aria-label="bridge"
        type="image/svg+xml"
        data={`/icons/easy-banking/Line4.svg`}
        >Your borwser doesn't support SVG
      </object>
      {#if forthTech}
        <Technology
          class="flex-1 "
          name={forthTech.name}
          platform={forthTech.platform}
          service={forthTech.service}
          colors={forthTech.colors}
        />
      {/if}
    </div>
  </div>
</section>
