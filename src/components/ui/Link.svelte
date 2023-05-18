<script lang="ts">
  import Icon from './Icon.svelte';
  export let icon: IconVariants | false = 'ChevronRight';
  export let href: string;
</script>

<a
  class="{$$props.class} text-blue-primary text-res-link flex items-center space-x-[8px] group p-0 leading-none"
  {href}
>
  <span
    class="group-hover:border-opacity-100 group-hover:translate-x-[2px] border-opacity-0 border-b border-blue-primary transition-all duration-500"
  >
    <slot />
  </span>
  {#if icon}
    <Icon
      className="group-hover:translate-x-[10px] transition-transform duration-500"
      {icon}
    />
  {/if}
</a>
