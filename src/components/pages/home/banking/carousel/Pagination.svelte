<div class="swiper-pagination" />

<style>
  .swiper-pagination {
    position: absolute;
    bottom: 0px;
    left: 50% !important;
    transform: translate(-50%, 43px);
    width: auto !important;
    z-index: 20;
  }
  :global(#banking-carousel .swiper-pagination-bullet) {
    width: 16px !important;
    height: 16px !important;
    opacity: 1;
    background: #d9ebff !important;
  }

  :global(#banking-carousel .swiper-pagination-bullet-active) {
    background-color: #1f80f0 !important;
    position: relative;
  }
  :global(#banking-carousel .swiper-pagination-bullet-active::after) {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    height: 6px;
    width: 6px;
    background: white;
    border-radius: 100%;
    transform: translate(-50%, -50%);
  }
</style>
