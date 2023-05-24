<script lang="ts">
  import H5 from '@/components/ui/H5.svelte';
  import { imageBuilder } from '@/lib/helpers';
  import SanityImage from '@/lib/sanity-image/sanity-image.svelte';
  import type { SanityAsset } from '@sanity/image-url/lib/types/types';

  export let image: SanityAsset;
  export let title: string;
  export let description: string;
</script>

<li>
  <div class="md:mb-[42px] mb-[26px]">
    <SanityImage
      imageUrlBuilder={imageBuilder}
      src={image}
      class="mx-auto h-[155px] w-[155px] overflow-hidden rounded-full border-[8.5px] border-white object-cover drop-shadow-ellipse"
      sizes="30px"
      alt={image.alt}
    />
  </div>

  <H5 class="mb-[16px]">{title}</H5>
  <p class="md:text-[18px] text-[14px] leading-[160%] text-blue-secondary">
    {description}
  </p>
</li>
