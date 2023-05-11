<script lang="ts">
  import { timeline } from 'motion';
  import H5 from '@/components/ui/H5.svelte';
  import H3 from '@/components/ui/H3.svelte';
  import Description from '@/components/ui/Description.svelte';
  import { PortableText } from '@portabletext/svelte';
  import Link from '@/components/ui/Link.svelte';
  import type { IntegratedTechnologyFlow } from '@/lib/types/homePage';

  export let index: number;
  export let activeItemIndex: number;
  export let cardCount: number;
  export let technology: IntegratedTechnologyFlow;
  const { description, name, platform, link } = technology;

  let spacingFactor = 10;
  let rootRef: HTMLElement;
  let techRef: HTMLDivElement;
  let scale = 0;
  let previousActiveItemIndex = 0;
  let scrollDirection: 'down' | 'up' = 'down';
  const scaleOrder = Array.from(
    { length: cardCount },
    (_, index) => 1 - index * 0.1
  ).reverse();
  $: offset = ((index - activeItemIndex + cardCount) % cardCount) + 1;
  $: zIndex = cardCount - offset;
  $: translateY = offset === 0 ? -50 : -50 - offset * -10;
  $: {
    const scaleIndex = (scaleOrder.length - offset) % scaleOrder.length;
    scale = scaleOrder[scaleIndex] as number;
  }

  $: {
    if (activeItemIndex > previousActiveItemIndex) scrollDirection = 'down';
    else if (activeItemIndex < previousActiveItemIndex) scrollDirection = 'up';

    previousActiveItemIndex = activeItemIndex;
  }
  $: if (techRef) {
    if (scrollDirection === 'down')
      timeline(
        [
          [techRef, { y: `${translateY}%`, opacity: [0.9, 1] }],
          [techRef, { scale: scale }],
          [rootRef, { zIndex: zIndex }, { at: 0.3 }],
        ],
        { duration: 0.8 }
      );
    else {
      timeline([
        [techRef, { scale: scale }],
        [rootRef, { zIndex: zIndex }, { at: 0.05 }],
        [techRef, { y: `${translateY}%` }],
      ]);
    }
  }
</script>

<article
  bind:this={rootRef}
  style="margin-top: calc(25% - {cardCount *
    spacingFactor}px); top:calc(50% - {spacingFactor}%);"
  class="sticky"
>
  <div
    bind:this={techRef}
    class="px-[66px] py-[64px] shadow-card-light rounded-lg grid grid-cols-2 gap-[76px] left-0 absolute bg-white"
  >
    <div class="space-y-[26px]">
      <H5>{name}</H5>
      <H3>{platform}</H3>
      <Description class="whitespace-pre-line">
        <PortableText value={description} />
      </Description>

      {#if !!link?.title}
        <Link href={link?.href}>
          {link.title}
        </Link>
      {/if}
    </div>
    <div
      style="background: linear-gradient(38.43deg, #1F80F0 -9.21%, #00E9EA 123.89%);"
      class="h-full w-full rounded-md"
    />
  </div>
</article>
