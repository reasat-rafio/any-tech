<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer';
  let intersecting = false;
  export let value: number;
  let counterResult = 0;
  let element: HTMLSpanElement;

  let counter = setInterval(() => {
    if (intersecting) {
      counterResult += value > 50 ? 4 : 1;
      if (counterResult === value) {
        clearInterval(counter);
      }
    }
  }, 20);
</script>

<IntersectionObserver {element} bind:intersecting>
  <span bind:this={element}>
    {counterResult}
  </span>
</IntersectionObserver>
