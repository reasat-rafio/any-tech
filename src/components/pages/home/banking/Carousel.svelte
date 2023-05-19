<script lang="ts">
  import Description from '@/components/ui/Description.svelte';
  import H3 from '@/components/ui/H3.svelte';
  import H5 from '@/components/ui/H5.svelte';
  import Link from '@/components/ui/Link.svelte';
  import { imageBuilder } from '@/lib/helpers';
  import SanityImage from '@/lib/sanity-image/sanity-image.svelte';
  import type { BankingSolution } from '@/lib/types/homePage';
  import { PortableText } from '@portabletext/svelte';
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';

  export let solutions: BankingSolution[];
</script>

<div class={$$props.class}>
  <Splide
    class=""
    options={{
      arrows: false,
      pagination: false,
      autoplay: true,
      speed: 1500,
      gap: '1rem',
    }}
    aria-label="Integrated Technologies"
  >
    {#each solutions as { name, description, platform, link, image }}
      <SplideSlide class="pb-6 px-2">
        <article
          class="p-[24px] space-y-[24px] shadow-card-light-sm rounded-lg"
        >
          {#if name}
            <H5>{name}</H5>
          {/if}
          <H3>{platform}</H3>
          <div class="rounded-[8px] w-full min-h-[125px] overflow-hidden">
            <SanityImage
              imageUrlBuilder={imageBuilder}
              class="h-full w-full object-cover"
              src={image}
              sizes="200px"
            />
          </div>
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
