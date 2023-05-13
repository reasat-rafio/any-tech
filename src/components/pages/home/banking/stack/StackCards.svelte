<script lang="ts">
  import type { BankingSolution } from '@/lib/types/homePage';
  import Technology from './Card.svelte';

  export let solutions: BankingSolution[];
  let sectionRef: HTMLDivElement;
  let windowHeight = 0;
  let activeItemIndex = 0;

  const getActiveItem = () => {
    let itemLength =
      window.scrollY + window.innerHeight <= sectionRef.offsetTop
        ? 0
        : window.scrollY + window.innerHeight - sectionRef.offsetTop <=
          window.innerHeight + sectionRef.offsetHeight
        ? window.scrollY + window.innerHeight - sectionRef.offsetTop
        : window.innerHeight + sectionRef.offsetHeight;

    activeItemIndex = Math.min(
      Math.round(
        (itemLength * solutions.length) /
          (window.innerHeight + sectionRef.offsetHeight)
      ),
      solutions.length - 1
    );
  };

  const windowScrollAction = () => {
    if (sectionRef) {
      getActiveItem();
    }
  };
</script>

<svelte:window bind:innerHeight={windowHeight} on:scroll={windowScrollAction} />
<div
  style="height: {solutions.length * 100}vh; margin-bottom: {solutions.length *
    100}px"
  bind:this={sectionRef}
  class="{$$props.class} relative"
>
  {#each solutions as technology, index (technology._key)}
    <Technology
      {technology}
      index={index + 1}
      activeItemIndex={activeItemIndex + 1}
      cardCount={solutions.length}
    />
  {/each}
</div>
