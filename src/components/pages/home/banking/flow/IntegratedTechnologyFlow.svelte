<script lang="ts">
  import type { IntegratedTechnologyFlow } from '@/lib/types/homePage';
  import Technology from './Technology.svelte';
  export let integratedTechnologyFlow: IntegratedTechnologyFlow[];

  let [firstTechnology, secondTechnology, ...restTechnologies] =
    integratedTechnologyFlow;
</script>

<section class="{$$props.class} flex flex-col space-y-[19px] text-center">
  <div
    class="py-[26px] px-[20px] lg:px-[78px] lg:py-[29px] bg-[#FAFAFA] lg:rounded-[36px] rounded-[16px]"
  >
    {#if !!firstTechnology}
      <Technology
        name={firstTechnology.name}
        platform={firstTechnology.platform}
        service={firstTechnology.service}
      />
    {/if}
  </div>

  <div
    class="flex-1 bg-[#FAFAFA] lg:rounded-[36px] rounded-[16px] py-[26px] px-[20px] lg:px-[78px] lg:py-[29px] flex flex-col justify-center items-center w-full lg:space-y-[40px] space-y-[20px]"
  >
    {#if secondTechnology}
      <Technology
        name={secondTechnology.name}
        platform={secondTechnology.platform}
        service={secondTechnology.service}
      />
    {/if}

    <div class="flex w-full space-x-[15%] justify-around">
      {#each restTechnologies as tech}
        <Technology
          name={tech.name}
          platform={tech.platform}
          service={tech.service}
        />
      {/each}
    </div>
  </div>
</section>
