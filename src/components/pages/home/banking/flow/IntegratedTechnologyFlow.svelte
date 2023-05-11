<script lang="ts">
  import type { IntegratedTechnologyFlow } from '@/lib/types/homePage';
  import Technology from './Technology.svelte';
  export let integratedTechnologyFlow: IntegratedTechnologyFlow[];

  let [firstTechnology, secondTechnology, ...restTechnologies] =
    integratedTechnologyFlow;
</script>

<section class="{$$props.class} flex flex-col space-y-[19px] text-center">
  <div
    class="py-[26px] px-[20px] lg:px-[78px] lg:py-[29px] bg-[#FAFAFA] lg:rounded-[36px] rounded-[16px] relative"
  >
    {#if !!firstTechnology}
      <Technology
        class="mb-[20px] w-fit mx-auto"
        name={firstTechnology.name}
        platform={firstTechnology.platform}
        service={firstTechnology.service}
        colors={firstTechnology.colors}
      />
    {/if}

    <object
      class="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2"
      aria-label="bridge"
      type="image/svg+xml"
      data={`/icons/easy-banking/Bridge.svg`}
      >Your borwser doesn't support SVG
    </object>
    <object
      class="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2"
      aria-label="bridge"
      type="image/svg+xml"
      data={`/icons/easy-banking/Line1.svg`}
      >Your borwser doesn't support SVG
    </object>
  </div>

  <div
    class="flex-1 bg-[#FAFAFA] lg:rounded-[36px] rounded-[16px] py-[26px] px-[20px] lg:px-[78px] lg:py-[29px] flex flex-col justify-center items-center w-full lg:space-y-[40px] space-y-[20px] mt-[20px]"
  >
    <div class="relative">
      {#if secondTechnology}
        <Technology
          class="relative z-10"
          name={secondTechnology.name}
          platform={secondTechnology.platform}
          service={secondTechnology.service}
          colors={secondTechnology.colors}
        />
      {/if}
      <object
        class="absolute top-[30%] right-[-10%]"
        aria-label="bridge"
        type="image/svg+xml"
        data={`/icons/easy-banking/Line3.svg`}
        >Your borwser doesn't support SVG
      </object>
      <object
        class="absolute top-[30%] left-[-10%]"
        aria-label="bridge"
        type="image/svg+xml"
        data={`/icons/easy-banking/Line2.svg`}
        >Your borwser doesn't support SVG
      </object>
    </div>

    <div class="flex w-full space-x-[15%] justify-around relative">
      {#each restTechnologies as tech}
        <Technology
          name={tech.name}
          platform={tech.platform}
          service={tech.service}
          colors={tech.colors}
        />
      {/each}

      <object
        class="absolute top-[25%] right-1/2 translate-x-[45%] translate-y-1/2 w-[15%]"
        aria-label="bridge"
        type="image/svg+xml"
        data={`/icons/easy-banking/Line4.svg`}
        >Your borwser doesn't support SVG
      </object>
    </div>
  </div>
</section>
