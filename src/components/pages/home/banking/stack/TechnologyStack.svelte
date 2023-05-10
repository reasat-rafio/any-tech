<script lang="ts">
  import type { IntegratedTechnologyFlow } from '@/lib/types/homePage';
  import H5 from '@/components/ui/H5.svelte';
  import H3 from '@/components/ui/H3.svelte';
  import Description from '@/components/ui/Description.svelte';
  import { PortableText } from '@portabletext/svelte';
  import Link from '@/components/ui/Link.svelte';
  import { animate } from 'motion';

  export let integratedTechnologyFlow: IntegratedTechnologyFlow[];
  let sectionRef: HTMLDivElement;
  let spacing = 10;
  let windowHeight = 0;

  const animation = (el: HTMLDivElement, index: number) => {
    animate(el, {
      y: index === 0 ? `-${50 + spacing / 2}%` : `-${50 - index * spacing}%`,
      scale: 1 - Math.max(index, 0) * 0.05,
    });
  };

  const windowScrollAction = () => {};
</script>

<svelte:window bind:innerHeight={windowHeight} on:scroll={windowScrollAction} />
<div
  style="height: {integratedTechnologyFlow.length * 100}vh;"
  bind:this={sectionRef}
  class="relative"
>
  {#each integratedTechnologyFlow as { name, description, link, platform }, index}
    <div
      style="z-index: {50 -
        index};  margin-top: calc(25% - {integratedTechnologyFlow.length *
        spacing}px + {spacing / 2}%)"
      class="sticky top-1/2"
    >
      <div
        use:animation={index}
        class="px-[66px] py-[64px] shadow-card-light rounded-lg grid grid-cols-2 gap-[76px] bg-white left-0 absolute"
      >
        <div class="space-y-[26px]">
          <H5>{name}</H5>
          <H3>{platform}</H3>
          <Description class="whitespace-pre-line">
            <PortableText value={description} />
          </Description>

          {#if !!link}
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
    </div>
  {/each}
</div>
