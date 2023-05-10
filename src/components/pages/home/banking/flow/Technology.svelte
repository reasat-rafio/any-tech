<script lang="ts">
  export let name: string;
  export let platform: string;
  export let service: string;
</script>

<div class="rounded-[12px]">
  <div
    class="bg-white py-[21px] px-[24px] rounded-sm flex flex-col shadow-card"
  >
    <span class="text-blue-primary as text-[12px] font-bold tracking-[0.16em]">
      {name}
    </span>
    <span class="text-blue-secondary text-[24px] font-Montserrat font-semibold">
      {platform}
    </span>
  </div>
  <p class="text-blue-crystal text-[12px] font-semibold mt-[23px]">
    {service}
  </p>
</div>
