<script lang="ts">
  import Description from '@/components/ui/Description.svelte';
  import H3 from '@/components/ui/H3.svelte';
  import H5 from '@/components/ui/H5.svelte';
  import Link from '@/components/ui/Link.svelte';
  import type { IntegratedTechnologyFlow } from '@/lib/types/homePage';
  import { PortableText } from '@portabletext/svelte';
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';

  export let integratedTechnologyFlow: IntegratedTechnologyFlow[];
</script>

<div class={$$props.class}>
  <Splide
    options={{ arrows: false, pagination: false, autoplay: true, speed: 1500 }}
    aria-label="My Favorite Images"
  >
    {#each integratedTechnologyFlow as { name, description, platform, link }}
      <SplideSlide>
        <article class="p-[24px] space-y-[24px]">
          <H5>{name}</H5>
          <H3>{platform}</H3>
          <div
            style="background: linear-gradient(38.43deg, #1F80F0 -9.21%, #00E9EA 123.89%);"
            class="rounded-[8px] w-full min-h-[125px]"
          />
          <Description class="whitespace-pre-line">
            <PortableText value={description} />
          </Description>
          {#if !!link?.title}
            <Link href={link?.href}>
              {link.title}
            </Link>
          {/if}
        </article>
      </SplideSlide>
    {/each}
  </Splide>
</div>
