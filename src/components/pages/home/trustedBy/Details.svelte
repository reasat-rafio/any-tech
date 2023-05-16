<script lang="ts">
  import type { Detail } from '@/lib/types/homePage';
  export let details: Detail[];
</script>

<div
  class="py-16 max-lg:space-y-6 lg:flex items-center justify-between xl:mx-28"
>
  {#each details as { frontSymbol, number, backSymbol, description }}
    <div
      class="flex max-lg:justify-between items-center lg:flex-col max-lg:border-b border-lavender border-dashed pb-5"
    >
      <h2
        class="text-[64px] lg:text-[96px] font-Montserrat tracking-[-0.02em] font-semibold text-blue-primary leading-none"
      >
        {frontSymbol ?? ''}{number}{backSymbol ?? ''}
      </h2>
      <p
        class="text-right lg:text-center text-black max-lg:text-res-link lg:text-lg lg:pt-2"
      >
        {description}
      </p>
    </div>
  {/each}
</div>
