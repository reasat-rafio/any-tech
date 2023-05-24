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
    class="container lg:pt-[85px] pt-[50px] relative"
  >
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
            class="grid lg:grid-cols-2 grid-cols-1 p-[24px] lg:px-[38px] lg:gap-[40px] lg:py-[43px] xl:px-[48px] xl:gap-[50px] xl:py-[53px] shadow-card-light-sm lg:shadow-card-light rounded-lg"
          >
            <section class="space-y-[24px] lg:space-y-[32px] my-auto">
              <H2 class="text-blue-primary">{title}</H2>
              <p class="text-[24px] leading-[160%] text-blue-secondary">
                {description}
              </p>
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
        </SwiperSlide>
      {/each}
    </Swiper>
    <NavigationArrow
      class="hidden lg:block"
      {disablePrevBtn}
      {disableNextBtn}
      buttonPosition={navigationButtonPosition}
    />
    <PaginationBlock />
  </section>
{/if}
