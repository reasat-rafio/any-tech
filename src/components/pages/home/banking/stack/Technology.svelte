<script lang="ts">
  import { animate } from 'motion';
  import H5 from '@/components/ui/H5.svelte';
  import H3 from '@/components/ui/H3.svelte';
  import Description from '@/components/ui/Description.svelte';
  import { PortableText } from '@portabletext/svelte';
  import Link from '@/components/ui/Link.svelte';
  import type { IntegratedTechnologyFlow } from '@/lib/types/homePage';

  export let index: number;
  export let activeItemIndex: number;
  export let length: number;
  export let technology: IntegratedTechnologyFlow;
  const { description, name, platform, link } = technology;

  let spacing = 10;
  let rootElRef: HTMLDivElement;
  let techRef: HTMLDivElement;

  const animation = (el: HTMLDivElement, index: number) => {
    console.log({ y: 50 - index * spacing, z: 50 - index });

    animate(el, {
      y: `-${50 - index * spacing}%`,
      scale: 1 - index * 0.05,
    });
  };

  $: {
    if (techRef) {
      //   if (index === activeItemIndex) {
      //     rootElRef.style.zIndex = `${
      //       +rootElRef.style.zIndex + index * length - 1
      //     }`;
      //     animate(
      //       techRef,
      //       { y: '-50%', scale: 1, opacity: 1 },
      //       { easing: 'ease-in-out', duration: 0.5 }
      //     );
      //   } else {
      //     rootElRef.style.zIndex = `${50 - index * length - 1}`;
      //     animate(
      //       techRef,
      //       {
      //         y: `-${50 - index * spacing}%`,
      //         scale: 1 - index * 0.05,
      //         opacity: 0.85,
      //       },
      //       { duration: 0.3 }
      //     );
      //   }
    }
  }
</script>

<div
  bind:this={rootElRef}
  style="z-index: {50 - index};  margin-top: calc(25% - {length *
    spacing}px + {spacing / 2}%); top:calc(50% - {spacing}%);"
  class="sticky"
>
  <div
    bind:this={techRef}
    use:animation={index}
    class="px-[66px] py-[64px] shadow-card-light rounded-lg grid grid-cols-2 gap-[76px] left-0 absolute {index ===
    1
      ? 'bg-red-300'
      : index === 2
      ? 'bg-yellow-400'
      : index === 3
      ? 'bg-green-500'
      : 'bg-purple-800'}"
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
</div>
