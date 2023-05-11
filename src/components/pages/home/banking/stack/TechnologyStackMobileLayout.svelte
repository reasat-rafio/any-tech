<script lang="ts">
  import Description from '@/components/ui/Description.svelte';
  import H3 from '@/components/ui/H3.svelte';
  import H5 from '@/components/ui/H5.svelte';
  import Link from '@/components/ui/Link.svelte';
  import type { IntegratedTechnologyFlow } from '@/lib/types/homePage';
  import { PortableText } from '@portabletext/svelte';

  export let integratedTechnologyFlow: IntegratedTechnologyFlow[];
</script>

<div class="{$$props.class} grid grid-cols-1">
  {#each integratedTechnologyFlow as { name, description, platform, link }}
    <article class="p-[24px] space-y-[24px]">
      <H5>{name}</H5>
      <H3>{platform}</H3>
      <div
        style="background: linear-gradient(38.43deg, #1F80F0 -9.21%, #00E9EA 123.89%);"
        class="rounded-[8px] w-full min-h-[125px]"
      />
      <Description class="whitespace-pre-line">
        <PortableText value={description} />
      </Description>
      {#if !!link?.title}
        <Link href={link?.href}>
          {link.title}
        </Link>
      {/if}
    </article>
  {/each}
</div>
