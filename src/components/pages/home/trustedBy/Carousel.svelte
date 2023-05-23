<script lang="ts">
  import { imageBuilder } from '@/lib/helpers';
  import SanityImage from '@/lib/sanity-image/sanity-image.svelte';
  import { Autoplay } from 'swiper';
  import 'swiper/css';
  import 'swiper/css/autoplay';
  import { Swiper, SwiperSlide } from 'swiper/svelte';

  export let logos: SanityTitledImage[];
</script>

<div class={$$props.class}>
  <Swiper
    slidesPerView="auto"
    loopedSlides={logos.length}
    modules={[Autoplay]}
    loop
    spaceBetween={32}
    grabCursor
    mousewheel={{ forceToAxis: true }}
    autoplay
    speed={1500}
    centeredSlides
    aria-label="Company Logos"
  >
    {#each logos as logo}
      <SwiperSlide class="flex items-center my-auto !w-[170px]">
        <SanityImage imageUrlBuilder={imageBuilder} src={logo} sizes="170px" />
      </SwiperSlide>
    {/each}
  </Swiper>
</div>
