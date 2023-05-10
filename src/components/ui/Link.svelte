<script lang="ts">
  import Icon from './Icon.svelte';

  export let icon: IconVariants | false = 'ChevronRight';
  export let href: string;
</script>

<a
  class="{$$props.class} text-blue-primary text-res-link flex items-center space-x-[8px]"
  {href}
>
  <span>
    <slot />
  </span>
  {#if icon}
    <Icon {icon} />
  {/if}
</a>
