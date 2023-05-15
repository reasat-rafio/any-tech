<script lang="ts">
  import type { Colors } from '@/lib/types/homePage';

  export let name: string;
  export let platform: string;
  export let service: string;
  export let colors: Colors;
  export let animValue: number = 0;

  let titleRef: HTMLSpanElement;

  $: if (titleRef) {
    titleRef.style.background = `linear-gradient(90deg, ${colors.from.hex} ${animValue}%, ${colors.to.hex} 100%)`;
    titleRef.style.backgroundClip = 'text';
    titleRef.style.webkitBackgroundClip = 'text';
    titleRef.style.color = 'transparent';
  }
</script>

<div class="{$$props.class} lg:rounded-[12px] rounded-[8px]">
  <div
    class="bg-white lg:py-[21px] py-[13px] lg:px-[24px] px-[16px] rounded-sm flex flex-col shadow-card"
  >
    <span
      bind:this={titleRef}
      class="uppercase text-[12px] font-bold tracking-[0.16em]"
    >
      {name}
    </span>
    <span class="text-blue-secondary text-[24px] font-Montserrat font-semibold">
      {platform}
    </span>
  </div>
  <p
    class="text-blue-crystal lg:text-[12px] text-[8.29px] font-semibold mt-[23px]"
  >
    {service}
  </p>
</div>
