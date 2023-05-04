<script lang="ts">
  export let servicesPage: boolean = false;

  let state: "notSubmitted" | "submitting" | "submitted" | "error" =
    "notSubmitted";
  let textAreaValue = "";

  $: textAreaValueLength = textAreaValue.length;
  $: button_styles = !servicesPage
    ? "w-[100px] leading-[2] min-h-[2rem] text-[1em] py-2 px-5 rounded-[2px] bg-[#0170B9]"
    : "w-full text-center bg-transparent border-white border-2 hover:bg-white hover:text-theme-primary";

  const handleSubmit = async (e: SubmitEvent) => {
    const form = e.target as HTMLFormElement;
    // getting the action url
    const ACTION_URL = form.action;

    const formData = new FormData(form);
    const data: { [key: string]: string | Blob } = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    state = "submitting";
    try {
      await fetch(ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      state = "submitted";
    } catch (e) {
      state = "error";
    }
  };
</script>

{#if state !== "submitted"}
  {#if state === "error"}
    <div class="bg-red-500 text-white p-1">
      There was an error submitting. Please try again
    </div>
  {/if}
  <form
    action="/api/contact"
    on:submit|preventDefault={handleSubmit}
    class="md:grid grid-cols-2 gap-x-[25px]"
  >
    <div class="grid gap-2 pt-[16px]">
      <label
        class="text-theme-secondary text-res-body-p md:text-body-p"
        class:font-bold={!servicesPage}
        class:!text-white={servicesPage}
        for="firstName"
        >First Name<span
          class:!text-white={servicesPage}
          class="text-[#790000] ml-[8px] font-bold">*</span
        >
      </label>
      <input
        class="border border-solid rounded-[2px] border-[#eaeaea] text-[#666] leading-[2] md:h-[30px] focus:outline-none max-md:min-h-[2rem] py-[5px] px-[4px]"
        type="text"
        name="firstName"
        required
      />
    </div>
    <div class="grid gap-2 pt-[16px]">
      <label
        class="text-theme-secondary text-res-body-p md:text-body-p"
        class:font-bold={!servicesPage}
        class:!text-white={servicesPage}
        for="lastName"
        >Last Name<span
          class:!text-white={servicesPage}
          class:font-bold={!servicesPage}
          class="text-[#790000] ml-[8px]">*</span
        >
      </label>
      <input
        class="border border-solid rounded-[2px] border-[#eaeaea] text-[#666] leading-[2] min-h-[2rem] py-[5px] px-[4px] md:h-[30px] focus:outline-none"
        type="text"
        name="lastName"
        required
      />
    </div>
    <div class="grid gap-2 pt-[16px]">
      <label
        class="text-theme-secondary text-res-body-p md:text-body-p"
        class:font-bold={!servicesPage}
        class:!text-white={servicesPage}
        for="email"
        >Email<span
          class:!text-white={servicesPage}
          class:font-bold={!servicesPage}
          class="text-[#790000] ml-[8px]">*</span
        >
      </label>
      <input
        class="border border-solid rounded-[2px] border-[#eaeaea] text-[#666] leading-[2] min-h-[2rem] py-[5px] px-[4px] md:h-[30px] focus:outline-none"
        type="email"
        name="email"
        required
      />
    </div>
    <div class="grid gap-2 pt-[16px]">
      <label
        class="text-theme-secondary text-res-body-p md:text-body-p"
        class:font-bold={!servicesPage}
        class:!text-white={servicesPage}
        for="yourOrganization"
        >Your Organization
      </label>
      <input
        class="border border-solid rounded-[2px] border-[#eaeaea] text-[#666] leading-[2] min-h-[2rem] py-[5px] px-[4px] md:h-[30px] focus:outline-none"
        type="text"
        name="yourOrganization"
      />
    </div>
    <div class="grid gap-2 pt-[16px]">
      <label
        class="text-theme-secondary text-res-body-p md:text-body-p"
        class:font-bold={!servicesPage}
        class:!text-white={servicesPage}
        for="address"
        >Address
      </label>
      <input
        class="border border-solid rounded-[2px] border-[#eaeaea] text-[#666] leading-[2] min-h-[2rem] py-[5px] px-[4px] md:h-[30px] focus:outline-none"
        type="text"
        name="address"
      />
    </div>
    <div class="grid gap-2 pt-[16px]">
      <label
        class="text-theme-secondary text-res-body-p md:text-body-p"
        class:font-bold={!servicesPage}
        class:!text-white={servicesPage}
        for="number"
        >Daytime Phone Number
      </label>
      <input
        class="border border-solid rounded-[2px] border-[#eaeaea] text-[#666] leading-[2] min-h-[2rem] py-[5px] px-[4px] md:h-[30px] focus:outline-none"
        type="tel"
        name="number"
      />
    </div>
    <div class="grid pt-[16px] col-span-2">
      <label
        class="text-theme-secondary text-res-body-p md:text-body-p"
        class:font-bold={!servicesPage}
        class:!text-white={servicesPage}
        for="inquiry"
        >Specific details about your inquiry<span
          class:!text-white={servicesPage}
          class:font-bold={!servicesPage}
          class="text-[#790000] ml-[8px]"
          >*
        </span>
      </label>
      <textarea
        class="border border-solid rounded-[2px] border-[#eaeaea] text-[#666] leading-[2] h-[7.5rem] md:h-40 min-h-[2rem] py-[5px] px-[4px] mt-2 focus:outline-none"
        name="inquiry"
        maxlength="2000"
        placeholder="Type your message here..."
        aria-required="true"
        aria-invalid="false"
        rows="10"
        cols="50"
        required
        bind:value={textAreaValue}
      />
      <span
        class:!text-white={servicesPage}
        class="mt-1 text-[.688em] text-[#767676] whitespace-nowrap"
        >{textAreaValueLength} of 2000 max characters
      </span>
    </div>
    <div class="col-span-2 flex items-center mt-8 mb-2.5">
      <input
        class="{button_styles} text-white cursor-pointer font-Roboto font-medium py-2 rounded-[2px]"
        type="submit"
        value="Submit"
        disabled={state === "submitting"}
      />
      {#if state === "submitting"}
        <div
          class:!text-white={servicesPage}
          class="ml-3 h-8 w-8 inline-block animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-theme-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        />
      {/if}
    </div>
  </form>
{:else}
  <div
    class:!text-white={servicesPage}
    class="font-Roboto font-medium text-theme-secondary"
  >
    Thanks for contacting us! We will get in touch with you shortly.
  </div>
{/if}
