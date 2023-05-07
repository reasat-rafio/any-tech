<script lang="ts">
  import SanityImage from '@/lib/sanity-image.svelte';
  import type { BusinessSolution } from '@/lib/types/homePage';
  import { PortableText } from '@portabletext/svelte';

  export let businessSolutions: BusinessSolution[];

  let selectedSolution = businessSolutions[0];
</script>

<div class="grid grid-cols-3 gap-[9px] mt-10">
  {#each businessSolutions as solution}
    <button
      on:click={() => (selectedSolution = solution)}
      style="box-shadow: 0px 2.8603px 4.00442px rgba(31, 128, 240, 0.18);"
      class="{selectedSolution?._key === solution._key
        ? 'bg-[#1F80F0] text-white'
        : 'bg-white'} rounded-[18px] flex justify-center items-center space-x-[8px] py-[8px] px-[15px]"
    >
      <SanityImage
        class="w-[10px]"
        alt="{solution.name} icon"
        image={solution.icon}
        maxWidth={20}
      />
      <span class="text-xs">{solution.name}</span>
    </button>
  {/each}

  {#if selectedSolution}
    <article>
      <h4>{selectedSolution.title}</h4>
      <PortableText value={selectedSolution.description} />
      {#if selectedSolution?.link}
        <a href={selectedSolution.link.href}> {selectedSolution.link.title}</a>
      {/if}
    </article>
  {/if}
</div>
