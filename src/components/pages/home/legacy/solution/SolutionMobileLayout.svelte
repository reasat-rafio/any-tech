<script lang="ts">
  import Description from '@/components/ui/Description.svelte';
  import Link from '@/components/ui/Link.svelte';
  import H3 from '@/components/ui/H3.svelte';
  import SanityImage from '@/lib/sanity-image/sanity-image.svelte';
  import type { EfficiencySolution } from '@/lib/types/homePage';
  import { PortableText } from '@portabletext/svelte';
  import { animate } from 'motion';
  import { imageBuilder } from '@/lib/helpers';

  export let solutions: EfficiencySolution[];
  let selectedSolution = solutions[0];
  let articleContainerRef: HTMLElement;

  const setNewSolution = (solution: EfficiencySolution) => {
    selectedSolution = solution;

    if (articleContainerRef)
      animate(
        articleContainerRef,
        { opacity: [0, 1] },
        { easing: 'ease-in-out' }
      );
  };
</script>

<section
  class="md:hidden block space-y-[24px] pt-[24px] border-t border-lavender"
>
  <div class="grid grid-cols-3 gap-[9.5px] mb-[24px]">
    {#each solutions as solution}
      <button
        on:click={() => setNewSolution(solution)}
        class="{selectedSolution?._key === solution._key
          ? 'bg-blue-primary '
          : 'bg-white'} rounded-xl flex justify-center items-center py-[8px] px-[15px] shadow-button-secondary"
      >
        <SanityImage
          imageUrlBuilder={imageBuilder}
          class="{selectedSolution?._key === solution._key &&
            'brightness-0 invert'} h-full w-full object-contain max-w-[80px]"
          alt="{solution.logo.alt} icon"
          src={solution.logo}
          sizes="80px"
        />
      </button>
    {/each}
  </div>

  {#if selectedSolution}
    <article bind:this={articleContainerRef}>
      <H3 class="mb-[16px]">
        {selectedSolution.title}
      </H3>
      <Description class="mb-[24px]">
        <PortableText value={selectedSolution.description} />
      </Description>

      {#if selectedSolution?.link}
        <Link href={selectedSolution.link.href}>
          {selectedSolution.link.title}</Link
        >
      {/if}
    </article>
  {/if}
</section>
