<script lang="ts">
  import type { BankingDiagram } from '@/lib/types/homePage';
  import Technology from './Technology.svelte';
  export let diagram: BankingDiagram[];
  import IntersectionObserver from 'svelte-intersection-observer';
  import { inView, timeline } from 'motion';

  let [firstItem, secondItem, thirdItem, forthItem] = diagram;
  let rootElement: HTMLElement;
  let topBlockRef: HTMLElement;
  let bottomBlockRef: HTMLElement;
  let intersecting = false;
  $: animValue = 0;

  function animateValue(start: number, end: number, duration: number) {
    const difference = end - start;
    let startTimestamp: number | null = null;
    let reverse = false;

    const step = () => {
      if (!intersecting) return;
      if (!startTimestamp) startTimestamp = Date.now();
      const progress = Math.min((Date.now() - startTimestamp) / duration, 1);

      if (reverse) animValue = Math.floor(progress * -difference + end);
      else animValue = Math.floor(progress * difference + start);
      if (progress >= 1) {
        reverse = !reverse;
        startTimestamp = null;
      }

      window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  }
  $: if (intersecting) animateValue(-100, 100, 3000);

  $: if (topBlockRef && bottomBlockRef) {
    inView(rootElement, () => {
      timeline(
        [
          [topBlockRef, { background: '#FAFAFA' }],
          [bottomBlockRef, { background: '#FAFAFA' }],
          ['.banking-svg-line', { opacity: [0, 1] }],
        ],
        { duration: 2 }
      );
    });
  }
</script>

<IntersectionObserver element={rootElement} bind:intersecting>
  <section
    bind:this={rootElement}
    class="{$$props.class} flex flex-col space-y-[19px] text-center"
  >
    <div
      bind:this={topBlockRef}
      class="py-[26px] px-[20px] xl:px-[78px] xl:py-[29px] bg-transparent lg:rounded-[36px] rounded-md relative"
    >
      <div class="mb-[20px] w-fit mx-auto">
        {#if !!firstItem}
          <Technology
            name={firstItem.name}
            platform={firstItem.platform}
            service={firstItem.service}
            colors={firstItem.colors}
            {animValue}
          />
        {/if}
      </div>

      <object
        class="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 banking-svg-line opacity-0"
        aria-label="bridge"
        type="image/svg+xml"
        data={`/icons/easy-banking/Bridge.svg`}
        >Your borwser doesn't support SVG
      </object>
      <object
        class="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 h-[25%] banking-svg-line opacity-0"
        aria-label="bridge"
        type="image/svg+xml"
        data={`/icons/easy-banking/Line1.svg`}
        >Your borwser doesn't support SVG
      </object>
    </div>

    <div
      bind:this={bottomBlockRef}
      class="flex-1 bg-transparent xl:rounded-[36px] rounded-[16px] py-[26px] px-[20px] xl:px-[78px] xl:py-[29px] flex flex-col justify-center items-center w-full lg:space-y-[40px] space-y-[20px] mt-[20px]"
    >
      <div class="relative w-fit overflow-visible">
        {#if secondItem}
          <Technology
            class="relative z-10"
            name={secondItem.name}
            platform={secondItem.platform}
            service={secondItem.service}
            colors={secondItem.colors}
            {animValue}
          />
        {/if}
        <div class="absolute top-[35%] left-0 w-full h-[75%] flex">
          <object
            class="flex-1 -translate-x-1/4 md:-translate-x-1/3 banking-svg-line opacity-0"
            aria-label="bridge"
            type="image/svg+xml"
            data={`/icons/easy-banking/Line2.svg`}
            >Your borwser doesn't support SVG
          </object>
          <object
            class="flex-1 translate-x-1/4 md:translate-x-1/3 banking-svg-line opacity-0"
            aria-label="bridge"
            type="image/svg+xml"
            data={`/icons/easy-banking/Line3.svg`}
            >Your borwser doesn't support SVG
          </object>
        </div>
      </div>

      <div class="flex relative">
        {#if thirdItem}
          <Technology
            class="flex-1 "
            name={thirdItem.name}
            platform={thirdItem.platform}
            service={thirdItem.service}
            colors={thirdItem.colors}
            {animValue}
          />
        {/if}

        <object
          class="w-[15%] -translate-y-[20%] banking-svg-line opacity-0"
          aria-label="bridge"
          type="image/svg+xml"
          data={`/icons/easy-banking/Line4.svg`}
          >Your borwser doesn't support SVG
        </object>
        {#if forthItem}
          <Technology
            class="flex-1 "
            name={forthItem.name}
            platform={forthItem.platform}
            service={forthItem.service}
            colors={forthItem.colors}
            {animValue}
          />
        {/if}
      </div>
    </div>
  </section>
</IntersectionObserver>
