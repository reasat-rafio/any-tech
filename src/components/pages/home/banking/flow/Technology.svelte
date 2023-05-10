<script lang="ts">
  export let name: string;
  export let platform: string;
  export let service: string;
</script>

<div class="lg:rounded-[12px] rounded-[8px]">
  <div
    class="bg-white lg:py-[21px] py-[13px] lg:px-[24px] px-[16px] rounded-sm flex flex-col shadow-card"
  >
    <span class="text-blue-primary as text-[12px] font-bold tracking-[0.16em]">
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
