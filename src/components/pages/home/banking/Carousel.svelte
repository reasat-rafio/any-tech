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
  import CustomParagraph from './stack/CustomParagraph.svelte';
  import '@splidejs/svelte-splide/css';

  export let solutions: BankingSolution[];
</script>

<div class={$$props.class}>
  <Splide
    class="mt-20"
    options={{
      arrows: false,
      pagination: false,
      autoplay: true,
      speed: 1500,
      gap: '2rem',
    }}
    aria-label="Integrated Technologies"
  >
    {#each solutions as { name, description, platform, link, image }}
      <SplideSlide class="pb-6 px-2">
        <article
          class="p-[24px] lg:px-[38px] lg:gap-[40px] lg:py-[43px] xl:px-[48px] xl:gap-[60px] xl:py-[53px] shadow-card-light-sm lg:shadow-card-light rounded-lg grid lg:grid-cols-2 grid-cols-1"
        >
          <section class="space-y-[24px] lg:space-y-[26px]">
            {#if name}
              <H5>{name}</H5>
            {/if}
            <H3>{platform}</H3>
            <div
              class="rounded-[8px] w-full min-h-[125px] overflow-hidden lg:hidden"
            >
              <SanityImage
                imageUrlBuilder={imageBuilder}
                class="h-full w-full object-cover max-h-[400px]"
                src={image}
                sizes="200px"
              />
            </div>
            <Description class="whitespace-pre-line">
              <PortableText
                components={{
                  block: { normal: CustomParagraph },
                }}
                value={description}
              />
            </Description>
            {#if !!link?.title && !!link?.href}
              <Link href={link.href}>
                {link.title}
              </Link>
            {/if}
          </section>
          <div
            class="rounded-md w-full min-h-[220px] overflow-hidden lg:block hidden"
          >
            <SanityImage
              imageUrlBuilder={imageBuilder}
              class="h-full w-full object-cover aspect-square xl:min-h-[450px]"
              src={image}
              sizes="500px"
            />
          </div>
        </article>
      </SplideSlide>
    {/each}
  </Splide>
</div>
