<script lang="ts">
  export let waveLines1DesktopRef: HTMLObjectElement;
  export let waveLines2DesktopRef: HTMLObjectElement;
</script>

<object
  bind:this={waveLines1DesktopRef}
  class="absolute top-0 right-0 h-full w-full object-cover"
  aria-label="background waveforms"
  type="image/svg+xml"
  data={`/backgrounds/WaveLinesDesktop1.svg`}
  >Your borwser doesn't support SVG
</object>
<object
  bind:this={waveLines2DesktopRef}
  class="lg:block hidden absolute bottom-0 right-0 h-[220%] w-[120%] object-bottom"
  aria-label="background waveforms"
  type="image/svg+xml"
  data={`/backgrounds/WaveLinesDesktop2.svg`}
  >Your borwser doesn't support SVG
</object>
<object
  class="lg:hidden block absolute bottom-0 right-0 h-full w-full object-bottom"
  aria-label="background waveforms"
  type="image/svg+xml"
  data={`/backgrounds/WaveLinesMobile2.svg`}
  >Your borwser doesn't support SVG
</object>
<object
  class="absolute lg:hidden block top-0 right-0 h-full w-full object-coverx translate-y-[-5%]"
  aria-label="background waveforms"
  type="image/svg+xml"
  data={`/backgrounds/WaveLinesMobile1.svg`}
  >Your borwser doesn't support SVG
</object>
