<script lang="ts">
  import HamburgerClose from '../icons/HamburgerClose.svelte';
  import HamburgerOpen from '../icons/HamburgerOpen.svelte';
  import { urlForSanityImage } from '@/lib/helpers';
  let showMobileMenu = false;
  import { navbarHeight } from '@/store';

  export let logo: SanityTitledImage;
</script>

<div
  bind:clientHeight={$navbarHeight}
  id="main-navigation"
  class="max-w-[1200px] mx-auto relative flex items-center flex-wrap justify-between lg:relative z-[9999] max-lg:py-8 max-xl:px-[1.938rem]"
>
  <h1>
    <a aria-label="Go to home page" href="/" rel="home"
      ><img
        src={urlForSanityImage(logo).url()}
        class="w-[100px] h-auto object-contain lg:w-[200px]"
        alt="Home Page"
      />
    </a>
  </h1>
  <div class="flex items-center">
    <nav
      class="desktop-menu max-lg:hidden"
      aria-label="Main navigation desktop"
    >
      <ul class="flex">
        <slot />
      </ul>
    </nav>
    <button
      on:click={() => (showMobileMenu = !showMobileMenu)}
      class="cursor-pointer lg:hidden"
    >
      {#if !showMobileMenu}
        <HamburgerOpen />
      {:else}
        <HamburgerClose />
      {/if}
    </button>
  </div>
  <nav
    class="absolute top-[100%] bg-blue-primary/50 backdrop-blur lg:hidden transition-transform w-full right-0 left-0 py-12 -translate-x-full px-[1.938rem]"
    class:translate-x-0={showMobileMenu}
  >
    <ul class="flex items-center flex-col space-y-8">
      <slot />
    </ul>
  </nav>
</div>
