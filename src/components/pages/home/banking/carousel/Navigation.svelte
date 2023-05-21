<script lang="ts">
  export let disablePrevBtn: boolean;
  export let disableNextBtn: boolean;
  export let navBtnRef: HTMLButtonElement;
  export let availableSpaceAroundContainer: number;

  $: {
    console.log('====================================');
    console.log(availableSpaceAroundContainer);
    console.log('====================================');
  }
</script>

<div class={$$props.class}>
  <button
    id="prev_slide"
    style="left: {availableSpaceAroundContainer >= 56 ? '-56px' : '0'};"
    class="px-[18px] py-[14px] xl:px-[23px] xl:py-[16px] base-style -translate-x-1/2 {disablePrevBtn
      ? 'bg-[#E9F3FF]'
      : 'bg-[#DBECFF]'}"
  >
    <svg
      width="17"
      height="30"
      viewBox="0 0 17 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.1107 30C15.5942 30 16.0778 29.8163 16.4461 29.4507C17.1846 28.7176 17.1846 27.5325 16.4461 26.7994L4.56014 15.0003L16.4461 3.20115C17.1846 2.46804 17.1846 1.28295 16.4461 0.549834C15.7076 -0.183278 14.5138 -0.183278 13.7753 0.549834L0.553882 13.6746C-0.184627 14.4077 -0.184627 15.5928 0.553882 16.3259L13.7753 29.4507C14.1436 29.8163 14.6272 30 15.1107 30Z"
        fill={disablePrevBtn ? '#809BBB' : '#1F80F0'}
      />
    </svg>
  </button>
  <button
    id="next_slide"
    style="right: {availableSpaceAroundContainer >= 56 ? '-56px' : '0'};"
    bind:this={navBtnRef}
    class="px-[18px] py-[14px] xl:px-[23px] xl:py-[16px] base-style translate-x-1/2 {disableNextBtn
      ? 'bg-[#E9F3FF]'
      : 'bg-[#DBECFF]'}"
  >
    <svg
      width="17"
      height="30"
      viewBox="0 0 17 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.8893 30C1.40578 30 0.922192 29.8163 0.553882 29.4507C-0.184627 28.7176 -0.184627 27.5325 0.553882 26.7994L12.4399 15.0003L0.553882 3.20115C-0.184627 2.46804 -0.184627 1.28295 0.553882 0.549834C1.29239 -0.183278 2.48621 -0.183278 3.22472 0.549834L16.4461 13.6746C17.1846 14.4077 17.1846 15.5928 16.4461 16.3259L3.22472 29.4507C2.85641 29.8163 2.37283 30 1.8893 30Z"
        fill={disableNextBtn ? '#809BBB' : '#1F80F0'}
      />
    </svg>
  </button>
</div>

<style lang="postcss">
  .base-style {
    @apply absolute top-1/2 -translate-y-1/2 rounded-md transition-colors duration-300;
  }
</style>
