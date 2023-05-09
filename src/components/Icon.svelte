<script lang="ts">
  // update variant here
  export let icon: 'ChevronRight';
  export let airaLabel = 'icon';
  export let className = '';
</script>

<object
  class={className}
  aria-label={airaLabel}
  type="image/svg+xml"
  data={`/icons/${icon}.svg`}
  >Your borwser doesn't support SVG
</object>
