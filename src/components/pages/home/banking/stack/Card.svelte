<script lang="ts">
  import { timeline } from 'motion';
  import H5 from '@/components/ui/H5.svelte';
  import H3 from '@/components/ui/H3.svelte';
  import Description from '@/components/ui/Description.svelte';
  import { PortableText } from '@portabletext/svelte';
  import Link from '@/components/ui/Link.svelte';
  import type { BankingSolution } from '@/lib/types/homePage';
  import SanityImage from '@/lib/sanity-image.svelte';
  import CustomParagraph from './CustomParagraph.svelte';

  export let index: number;
  export let activeItemIndex: number;
  export let cardCount: number;
  export let technology: BankingSolution;

  const { description, name, platform, link, image } = technology;

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
    class="xl:px-[66px] xl:py-[64px] px-[46px] py-[44px] shadow-card-light rounded-lg grid grid-cols-12 xl:gap-[76px] gap-[50px] left-0 absolute bg-white xl:h-[550px] h-[480px] overflow-hidden justify-center items-center"
  >
    <div class="space-y-[26px] xl:col-span-6 col-span-7">
      {#if !!name}
        <H5>{name}</H5>
      {/if}
      <H3>{platform}</H3>
      <Description class="whitespace-pre-line">
        <PortableText
          components={{
            block: { normal: CustomParagraph },
          }}
          value={description}
        />
      </Description>

      {#if !!link?.title}
        <Link href={link?.href}>
          {link.title}
        </Link>
      {/if}
    </div>
    <div class="h-full w-full xl:col-span-6 col-span-5">
      <SanityImage
        {image}
        class="h-full w-full object-cover rounded-md"
        maxWidth={500}
      />
    </div>
  </div>
</article>
