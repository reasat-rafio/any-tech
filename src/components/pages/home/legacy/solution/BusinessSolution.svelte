<script lang="ts">
  import type { BusinessSolution } from '@/lib/types/homePage';
  export let businessSolutions: BusinessSolution[];
  //   import SanityPicture from 'astro-sanity-picture';

  let selectedSolution = businessSolutions[0];
</script>

<div class="grid grid-cols-3">
  {#each businessSolutions as { _key, icon, name }}
    <button />
  {/each}
</div>
