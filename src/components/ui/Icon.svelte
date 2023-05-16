<script lang="ts">
  import { afterUpdate } from 'svelte';

  // update variant here
  export let icon: IconVariants;
  export let airaLabel = 'icon';
  export let className = '';

  let isSVGReady = false;

  afterUpdate(() => {
    isSVGReady = true;
  });
</script>

{#if isSVGReady}
  <object
    class={className}
    aria-label={airaLabel}
    type="image/svg+xml"
    data={`/icons/${icon}.svg`}
    >Your borwser doesn't support SVG
  </object>
{/if}
