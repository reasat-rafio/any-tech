<script lang="ts">
  import Icon from './Icon.svelte';

  export let href: string;
  export let title: string;
  export let variant: 'outline' | 'solid' = 'solid';
</script>

<a
  class="md:py-[16px] py-[14px] px-[35px] rounded-xs shadow-button-primary text-link text-white flex items-center space-x-[8px] {variant ===
    'solid' && 'bg-orange'} {variant === 'outline' && 'border '}"
  {href}
>
  <span>
    {title}
  </span>
  <Icon icon="ChevronRightWhite" />
</a>
