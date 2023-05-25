<script lang="ts">
  import H2 from '@/components/ui/H2.svelte';
  import { imageBuilder } from '@/lib/helpers';
  import SanityImage from '@/lib/sanity-image/sanity-image.svelte';
  import type { Mission } from '@/lib/types/aboutPage';
  import { onMount } from 'svelte';
  import { Navigation, Pagination } from 'swiper';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import NavigationArrow from './Navigation.svelte';
  import PaginationBlock from './Pagination.svelte';

  export let missions: Mission[];

  let sectionRef: HTMLElement;
  let windowWidth = 0;
  $: posValue = windowWidth >= 1280 ? 56 : 36;
  $: navigationButtonPosition = -posValue;
  $: containerSpacing = posValue;

  let resizeTimer: string | number | NodeJS.Timeout | undefined;
  let disablePrevBtn = true;
  let disableNextBtn = false;
  const debounceDelay = 250;

  function adjustNavigationButtonPosition() {
    const containerRect = sectionRef.getBoundingClientRect();
    const availableSpace = containerRect.left - containerSpacing;
    if (availableSpace >= navigationButtonPosition) {
      navigationButtonPosition = -posValue;
    } else {
      navigationButtonPosition = -containerRect.left;
    }
  }

  onMount(() => adjustNavigationButtonPosition());
</script>

<svelte:window
  bind:innerWidth={windowWidth}
  on:resize={() => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      adjustNavigationButtonPosition();
    }, debounceDelay);
  }}
/>
{#if !!missions?.length}
  <section
    id="mission-carousel"
    bind:this={sectionRef}
    class="container xl:pb-[210px] pb-[110px]"
  >
    <div class="relative">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        speed={1000}
        navigation={{ prevEl: '#prev_slide', nextEl: '#next_slide' }}
        pagination={{
          el: '#mission-carousel .swiper-pagination',
          clickable: true,
          renderBullet: function (_, className) {
            return `<span class="${className}"></span>`;
          },
        }}
        on:slideChange={(swiper) => {
          let activeIndex = swiper.detail[0].activeIndex;
          if (activeIndex === 0) {
            disablePrevBtn = true;
            disableNextBtn = false;
          } else if (activeIndex === missions.length - 1) {
            disablePrevBtn = false;
            disableNextBtn = true;
          } else {
            disablePrevBtn = false;
            disableNextBtn = false;
          }
        }}
      >
        {#each missions as { description, image, title }}
          <SwiperSlide class="pb-6 px-2">
            <article
              class="grid md:grid-cols-2 grid-cols-1 p-[24px] md:px-[38px] md:gap-[40px] md:py-[43px] xl:px-[48px] xl:gap-[50px] xl:py-[53px] shadow-card-light-sm md:shadow-card-light rounded-lg"
            >
              <section class="space-y-[32px] my-auto">
                <H2 class="text-blue-primary whitespace-pre-wrap">{title}</H2>
                <p
                  class="md:text-[24px] text-[16px] md:leading-[160%] leading-[20px] text-blue-secondary md:font-normal font-semibold"
                >
                  {description}
                </p>
                <div
                  class="relative w-full md:hidden flex justify-center items-center py-[60px]"
                >
                  <img
                    class="absolute h-full w-full top-0 left-0 pointer-events-none object-contain"
                    src="/frames/carousel-image-frame-2.png"
                    alt="frame"
                    loading="lazy"
                  />
                  <img
                    class="absolute h-full w-full top-0 left-0 pointer-events-none object-center object-contain scale-110 -z-10"
                    src="/frames/carousel-image-frame-1.svg"
                    alt="frame"
                    loading="lazy"
                  />
                  <SanityImage
                    imageUrlBuilder={imageBuilder}
                    class="h-[80%] w-[80%] object-cover aspect-square"
                    src={image}
                    sizes="200px"
                  />
                </div>
              </section>
              <div
                class="relative w-full min-h-[220px] md:flex justify-center items-center hidden xl:min-h-[450px]"
              >
                <img
                  class="absolute h-full w-full top-0 left-0 pointer-events-none object-center object-contain"
                  src="/frames/carousel-image-frame-2.png"
                  alt="frame"
                  loading="lazy"
                />
                <img
                  class="absolute h-full w-full top-0 left-0 pointer-events-none object-center object-contain -z-10 scale-110"
                  src="/frames/carousel-image-frame-1.svg"
                  alt="frame"
                  loading="lazy"
                />

                <SanityImage
                  imageUrlBuilder={imageBuilder}
                  class="h-[80%] w-[80%] object-cover aspect-square"
                  src={image}
                  sizes="400px"
                />
              </div>
            </article>
          </SwiperSlide>
        {/each}
      </Swiper>
      <NavigationArrow
        class="hidden md:block w-full"
        {disablePrevBtn}
        {disableNextBtn}
        buttonPosition={navigationButtonPosition}
      />
      <PaginationBlock />
    </div>
  </section>
{/if}
