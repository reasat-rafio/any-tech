<script lang="ts">
  import Navigation from './Navigation.svelte';
  import DownArrow from '../icons/DownArrow.svelte';
  import { onMount } from 'svelte';
  import type { NavMenu } from '@/lib/types/site';

  let activeSubMenuKey = '';
  let currentPathname = '';

  onMount(() => {
    currentPathname = window.location.pathname;
  });

  export let logo: SanityTitledImage, navMenus: NavMenu[];
</script>

<header
  class="lg:absolute top-0 w-full text-white lg:pt-10 text-lg bg-blue-primary"
  class:lg:pb-10={currentPathname === '/privacy-policy'}
  class:!relative={currentPathname === '/privacy-policy'}
>
  <Navigation {logo}>
    {#each navMenus as { title, href, highlight, subMenus, _key } (_key)}
      {#if highlight}
        <li
          class="w-full whitespace-nowrap group lg:py-3 lg:px-6 lg:last:p-0 last:border-none lg:border-b border-white border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer"
        >
          <span class="flex items-center justify-between">
            <!-- <a {href}>
              {title}
            </a>
            {#if subMenus}
              <DownArrow
                class="fill-white ml-2 mt-1"
                expanded={activeSubMenuKey === _key}
              />
            {/if}
          {:else}
            <span class="bg-[#D9D9D9] w-px h-[33px] mx-8 max-lg:hidden" /> -->
            <a
              {href}
              class="border max-lg:w-full max-lg:justify-center max-lg:mt-6 border-white px-6 py-3 rounded-[3px] text-res-link lg:text-link flex items-center group/highlight hover:bg-white hover:text-blue-primary transition-colors shadow-button-primary"
            >
              {title}
              <DownArrow
                class="fill-white translate-x-2 transition-transform group-hover/highlight:translate-x-3 -rotate-90 group-hover/highlight:fill-blue-primary"
                expanded={activeSubMenuKey === _key}
              />
            </a>
          </span>
          <!-- TODO add dropdown on desktop class:lg:group-hover:block={subMenus} -->
          <span
            class="lg:absolute lg:top-full lg:bg-white lg:w-[240px] relative border-theme-body border-[1px] shadow-menu"
            class:hidden={activeSubMenuKey !== _key}
          >
            <ul class="flex flex-col relative -mt-[1px]">
              {#if subMenus}
                {#each subMenus as subMenu (subMenu._key)}
                  <li class="border-t border-theme-body whitespace-nowrap">
                    <a
                      class="hover:text-theme-primary hover:transition-colors duration-200 py-3 lg:pl-[15px] pl-7 max-lg:pr-5 inline-block"
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
      {/if}
    {/each}
  </Navigation>
</header>
