<script lang="ts">
  import Icon from '@/components/Icon.svelte';
  import SanityImage from '@/lib/sanity-image.svelte';
  import type { BusinessSolution } from '@/lib/types/homePage';
  import { PortableText } from '@portabletext/svelte';
  import { animate } from 'motion';

  export let businessSolutions: BusinessSolution[];
  let selectedSolution = businessSolutions[0];
  let articleContainerRef: HTMLElement;

  const setNewSolution = (solution: BusinessSolution) => {
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
    {#each businessSolutions as solution}
      <button
        on:click={() => setNewSolution(solution)}
        class="{selectedSolution?._key === solution._key
          ? 'bg-blue-primary '
          : 'bg-white'} rounded-xl flex justify-center items-center py-[8px] px-[15px] shadow-button-secondary"
      >
        <SanityImage
          class="{selectedSolution?._key === solution._key &&
            'brightness-0 invert'} h-full w-full object-contain max-w-[80px]"
          alt="{solution.logo.alt} icon"
          image={solution.logo}
          maxWidth={20}
        />
      </button>
    {/each}
  </div>

  {#if selectedSolution}
    <article bind:this={articleContainerRef}>
      <h3 class="text-black text-res-head-3 font-Montserrat mb-[16px]">
        {selectedSolution.title}
      </h3>
      <div class="text-blue-secondary text-res-body-p mb-[24px]">
        <PortableText value={selectedSolution.description} />
      </div>
      {#if selectedSolution?.link}
        <a
          class="text-blue-primary text-res-link flex items-center space-x-[8px]"
          href={selectedSolution.link.href}
        >
          <span>
            {selectedSolution.link.title}
          </span>
          <Icon icon="ChevronRight" />
        </a>
      {/if}
    </article>
  {/if}
</section>
