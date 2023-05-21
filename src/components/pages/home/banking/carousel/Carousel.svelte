<script lang="ts">
  import Description from '@/components/ui/Description.svelte';
  import H3 from '@/components/ui/H3.svelte';
  import H5 from '@/components/ui/H5.svelte';
  import Link from '@/components/ui/Link.svelte';
  import { imageBuilder } from '@/lib/helpers';
  import SanityImage from '@/lib/sanity-image/sanity-image.svelte';
  import type { BankingSolution } from '@/lib/types/homePage';
  import { PortableText } from '@portabletext/svelte';
  import { Navigation, Pagination } from 'swiper';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import CustomParagraph from '../stack/CustomParagraph.svelte';
  import NavigationArrow from './Navigation.svelte';
  import { onMount } from 'svelte';

  export let solutions: BankingSolution[];

  let sectionRef: HTMLDivElement;
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

  onMount(() => {
    adjustNavigationButtonPosition();
  });
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
<div
  bind:this={sectionRef}
  id="banking-carousel"
  class={`${$$props.class} relative`}
>
  <Swiper
    aria-label="Integrated Technologies"
    modules={[Navigation, Pagination]}
    spaceBetween={50}
    speed={1000}
    class="mt-20"
    navigation={{ prevEl: '#prev_slide', nextEl: '#next_slide' }}
    pagination={{
      el: '#banking-carousel .swiper-pagination',
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
      } else if (activeIndex === solutions.length - 1) {
        disablePrevBtn = false;
        disableNextBtn = true;
      } else {
        disablePrevBtn = false;
        disableNextBtn = false;
      }
    }}
  >
    {#each solutions as { name, description, platform, link, image }}
      <SwiperSlide class="pb-6 px-2">
        <article
          class="grid lg:grid-cols-2 grid-cols-1 p-[24px] lg:px-[38px] lg:gap-[40px] lg:py-[43px] xl:px-[48px] xl:gap-[60px] xl:py-[53px] shadow-card-light-sm lg:shadow-card-light rounded-lg"
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
      </SwiperSlide>
    {/each}
  </Swiper>
  <NavigationArrow
    class="hidden lg:block"
    {disablePrevBtn}
    {disableNextBtn}
    buttonPosition={navigationButtonPosition}
  />
  <div class="swiper-pagination" />
</div>

<style>
  .swiper-pagination {
    position: absolute;
    bottom: 0px;
    left: 50% !important;
    transform: translate(-50%, 43px);
    width: auto !important;
    z-index: 20;
  }
  :global(#banking-carousel .swiper-pagination-bullet) {
    width: 16px !important;
    height: 16px !important;
    opacity: 1;
    background: #d9ebff !important;
  }

  :global(#banking-carousel .swiper-pagination-bullet-active) {
    background-color: #1f80f0 !important;
    position: relative;
  }
  :global(#banking-carousel .swiper-pagination-bullet-active::after) {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    height: 6px;
    width: 6px;
    background: white;
    border-radius: 100%;
    transform: translate(-50%, -50%);
  }
</style>
