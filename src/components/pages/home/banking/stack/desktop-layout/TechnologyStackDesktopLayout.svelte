<script lang="ts">
  import type { IntegratedTechnologyFlow } from '@/lib/types/homePage';
  import Technology from './Technology.svelte';

  export let integratedTechnologyFlow: IntegratedTechnologyFlow[];
  let sectionRef: HTMLDivElement;
  let windowHeight = 0;
  let activeItemIndex = 0;

  console.log(integratedTechnologyFlow);

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
        (itemLength * integratedTechnologyFlow.length) /
          (window.innerHeight + sectionRef.offsetHeight)
      ),
      integratedTechnologyFlow.length - 1
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
  style="height: {integratedTechnologyFlow.length *
    100}vh; margin-bottom: {integratedTechnologyFlow.length * 100}px"
  bind:this={sectionRef}
  class="{$$props.class} relative"
>
  {#each integratedTechnologyFlow as technology, index (technology._key)}
    <Technology
      {technology}
      index={index + 1}
      activeItemIndex={activeItemIndex + 1}
      cardCount={integratedTechnologyFlow.length}
    />
  {/each}
</div>
