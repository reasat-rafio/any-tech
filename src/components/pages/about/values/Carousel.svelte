<script lang="ts">
  import type { ValueData } from '@/lib/types/aboutPage';
  import { Autoplay } from 'swiper';
  import 'swiper/css';
  import 'swiper/css/autoplay';
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import Card from './Card.svelte';

  export let values: ValueData[];
</script>

<div class={$$props.class}>
  <Swiper
    slidesPerView={1.2}
    loopedSlides={values.length}
    modules={[Autoplay]}
    loop
    spaceBetween={30}
    grabCursor
    mousewheel={{ forceToAxis: true }}
    autoplay
    speed={1500}
    aria-label="Company Values"
  >
    {#each values as { description, image, title }}
      <SwiperSlide>
        <Card {title} {description} {image} />
      </SwiperSlide>
    {/each}
  </Swiper>
</div>
