<script lang="ts">
  import type { Colors } from '@/lib/types/homePage';

  export let name: string;
  export let platform: string;
  export let service: string;
  export let colors: Colors;
</script>

<div class="{$$props.class} lg:rounded-[12px] rounded-[8px]">
  <div
    class="bg-white lg:py-[21px] py-[13px] lg:px-[24px] px-[16px] rounded-sm flex flex-col shadow-card"
  >
    <span
      style="background:linear-gradient(90deg, {colors.from.hex} 4.2%, {colors
        .to
        .hex} 100%); background-clip: text; -webkit-background-clip: text; color: transparent;"
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
