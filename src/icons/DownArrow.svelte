<script lang="ts">
  export let active: boolean = false;
  export let expanded: boolean = false;
</script>

<svg
  class:rotate-180={expanded}
  class:fill-blue-primary={active}
  class={$$props.class}
  width="9"
  height="6"
  viewBox="0 0 9 6"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M4.35156 5.27344C4.5625 5.48438 4.91406 5.48438 5.125 5.27344L8.3125 2.08594C8.54688 1.85156 8.54688 1.5 8.3125 1.28906L7.79688 0.75C7.5625 0.539062 7.21094 0.539062 7 0.75L4.72656 3.02344L2.47656 0.75C2.26562 0.539062 1.91406 0.539062 1.67969 0.75L1.16406 1.28906C0.929688 1.5 0.929688 1.85156 1.16406 2.08594L4.35156 5.27344Z"
  />
</svg>
