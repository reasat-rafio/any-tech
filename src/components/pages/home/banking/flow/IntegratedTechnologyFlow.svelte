<script lang="ts">
  import type { IntegratedTechnologyFlow } from '@/lib/types/homePage';
  import Technology from './Technology.svelte';
  export let integratedTechnologyFlow: IntegratedTechnologyFlow[];

  let [firstTechnology, secondTechnology, ...restTechnologies] =
    integratedTechnologyFlow;
</script>

<section class="flex flex-col space-y-[19px] text-center">
  <div class="px-[78px] py-[29px] bg-[#FAFAFA] rounded-[36px]">
    {#if !!firstTechnology}
      <Technology
        name={firstTechnology.name}
        platform={firstTechnology.platform}
        service={firstTechnology.service}
      />
    {/if}
  </div>

  <div
    class="flex-1 bg-[#FAFAFA] rounded-[36px] px-[78px] py-[29px] flex flex-col justify-center items-center w-full space-y-[40px]"
  >
    {#if secondTechnology}
      <Technology
        name={secondTechnology.name}
        platform={secondTechnology.platform}
        service={secondTechnology.service}
      />
    {/if}

    <div class="flex w-full space-x-[15%]">
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
