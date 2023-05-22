<script lang="ts">
  export let waveLines1DesktopRef: HTMLObjectElement;
  export let waveLines2DesktopRef: HTMLObjectElement;
  export let waveLines1MobileRef: HTMLObjectElement;
  export let waveLines2MobileRef: HTMLObjectElement;
</script>

<!-- Desktop -->
<object
  bind:this={waveLines1DesktopRef}
  class="lg:block absolute top-0 right-0 h-full w-full object-cover hidden"
  aria-label="background waveforms"
  type="image/svg+xml"
  data="/backgrounds/WaveLinesDesktop1.svg"
  >Your borwser doesn't support SVG
</object>
<object
  bind:this={waveLines2DesktopRef}
  class="lg:block hidden absolute bottom-0 right-0 h-[220%] w-[120%] object-bottom"
  aria-label="background waveforms"
  type="image/svg+xml"
  data="/backgrounds/WaveLinesDesktop2.svg"
  >Your borwser doesn't support SVG
</object>
<!-- Mobile -->
<object
  bind:this={waveLines1MobileRef}
  class="lg:hidden block absolute bottom-0 right-0 h-full w-full object-bottom"
  aria-label="background waveforms"
  type="image/svg+xml"
  data="/backgrounds/WaveLinesMobile2.svg"
  >Your borwser doesn't support SVG
</object>
<object
  bind:this={waveLines2MobileRef}
  class="absolute lg:hidden block top-0 right-0 h-full w-full object-coverx"
  aria-label="background waveforms"
  type="image/svg+xml"
  data="/backgrounds/WaveLinesMobile1.svg"
  >Your borwser doesn't support SVG
</object>
