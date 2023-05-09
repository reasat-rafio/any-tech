<script lang="ts">
  import Navigation from './Navigation.svelte';
  import DownArrow from '../../icons/DownArrow.svelte';
  import { onMount } from 'svelte';
  import type { NavMenu } from '@/lib/types/site';

  let activeSubMenuKey = '';
  let currentPathname = '';

  onMount(() => {
    currentPathname = window.location.pathname;
  });

  export let logo: SanityImage, navMenus: NavMenu[];
</script>

<header class="border-b-theme-body border-b">
  <Navigation {logo}>
    {#each navMenus as { title, href, subMenus, _key } (_key)}
      <li
        class="max-lg:border-t max-lg:border-theme-body w-full whitespace-nowrap group cursor-pointer menu"
      >
        <span class="flex items-center justify-between main-menu">
          {#if href}
            <a
              class="group-hover:text-theme-primary hover:transition-colors duration-200 text-body-p py-[15px] lg:py-4 lg:px-[15px] px-5 max-md:w-full"
              class:text-theme-primary={currentPathname === href}
              {href}
            >
              {title}
            </a>
          {:else}
            <div
              class="group-hover:text-theme-primary hover:transition-colors duration-200 text-body-p py-[15px] lg:py-4 lg:px-[15px] px-5 max-md:w-full"
              class:text-theme-primary={currentPathname === href}
            >
              {title}
            </div>
          {/if}
          {#if subMenus}
            <button
              on:click={() =>
                (activeSubMenuKey = activeSubMenuKey === _key ? '' : _key)}
              class="cursor-pointer max-md:px-5 max-md:mr-2.5"
              aria-label="Down Arrow"
            >
              <DownArrow
                class="lg:w-2 w-4 z-10 group-hover:fill-theme-primary hover:transition-colors duration-200"
                expanded={activeSubMenuKey === _key}
              />
            </button>
          {/if}
        </span>

        <span
          class="lg:absolute lg:top-full lg:bg-white lg:w-[240px] relative border-theme-body border-[1px] shadow-menu"
          class:lg:group-hover:block={subMenus}
          class:hidden={activeSubMenuKey !== _key}
        >
          <ul class="flex flex-col relative -mt-[1px]">
            {#if subMenus}
              {#each subMenus as subMenu (subMenu._key)}
                <li class="border-t border-theme-body whitespace-nowrap">
                  <a
                    class="hover:text-theme-primary hover:transition-colors duration-200 py-3 lg:pl-[15px] pl-7 max-lg:pr-5 inline-block"
                    class:active-sub-menu={currentPathname
                      .split('/')
                      .includes(subMenu.href?.replace('/', ''))}
                    href={!href ? subMenu.href : href + subMenu.href}
                  >
                    <span class="flex text-body-p">
                      <DownArrow
                        class="w-2 -rotate-90 fill-theme-muted mr-2 lg:hidden"
                        active={currentPathname
                          .split('/')
                          .includes(subMenu.href?.replace('/', ''))}
                      />
                      {subMenu.title}
                    </span>
                  </a>
                </li>
              {/each}
            {/if}
          </ul>
        </span>
      </li>
    {/each}
  </Navigation>
</header>

<style>
  .active-sub-menu {
    color: #0a7ebb;
  }
  .menu:has(a.active-sub-menu) .main-menu {
    color: #0a7ebb;
    fill: #0a7ebb;
  }
</style>
