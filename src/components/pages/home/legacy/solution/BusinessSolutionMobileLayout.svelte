<script lang="ts">
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
          ? 'bg-blue-primary text-white'
          : 'bg-white'} rounded-xl flex justify-center items-center space-x-[8px] py-[8px] px-[15px] shadow-button-secondary"
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
          <svg
            width="6"
            height="9"
            viewBox="0 0 6 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.25 4.73804L2.0625 7.92554C1.82812 8.15991 1.47656 8.15991 1.26562 7.92554L0.726562 7.40991C0.515625 7.17554 0.515625 6.82397 0.726562 6.61304L3 4.36304L0.726562 2.0896C0.515625 1.87866 0.515625 1.5271 0.726562 1.29272L1.26562 0.753662C1.47656 0.542725 1.82812 0.542725 2.0625 0.753662L5.25 3.94116C5.46094 4.17554 5.46094 4.5271 5.25 4.73804Z"
              fill="#1F80F0"
            />
          </svg>
        </a>
      {/if}
    </article>
  {/if}
</section>
