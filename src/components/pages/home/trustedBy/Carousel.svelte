<script lang="ts">
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';
  import { imageBuilder } from '@/lib/helpers';
  import SanityImage from '@/lib/sanity-image/sanity-image.svelte';

  export let logos: SanityTitledImage[];
</script>

<div class={$$props.class}>
  <div class="w-[140%] -translate-x-[15%]">
    <Splide
      options={{
        arrows: false,
        pagination: false,
        autoplay: true,
        speed: 1500,
        type: 'loop',
        gap: '2rem',
        perPage: 3,
        perMove: 1,
      }}
      aria-label="Company Logos"
    >
      {#each logos as logo}
        <SplideSlide class="flex items-center">
          <SanityImage
            imageUrlBuilder={imageBuilder}
            src={logo}
            sizes="170px"
          />
        </SplideSlide>
      {/each}
    </Splide>
  </div>
</div>
