<script lang="ts">
  import HamburgerClose from '../icons/HamburgerClose.svelte';
  import HamburgerOpen from '../icons/HamburgerOpen.svelte';
  import { urlForSanityImage } from '@/lib/helpers';

  let showMobileMenu = false;

  export let logo: SanityImage;
</script>

<div
  id="main-navigation"
  class="is-desktop relative flex items-center flex-wrap justify-between max-lg:py-2 px-5 uppercase text-sm text-[#3a3a3a] lg:relative bg-white z-[9999]"
>
  <h1>
    <a aria-label="Go to home page" href="/" rel="home"
      ><img
        src={urlForSanityImage(logo).url()}
        width="220px"
        height="34px"
        alt="Home Page"
      />
    </a>
  </h1>
  <div class="flex items-center px-2">
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
        <HamburgerOpen class="h-4 fill-theme-primary" />
      {:else}
        <HamburgerClose class="h-4 w-6 fill-theme-primary" />
      {/if}
    </button>
  </div>
  <nav
    class="mobile-menu absolute top-[100%] inset-x-0 bg-white lg:hidden"
    class:hidden={!showMobileMenu}
  >
    <ul class="flex items-center flex-col">
      <slot />
    </ul>
  </nav>
</div>
