<template>
  <section class="relative">
    <!-- Illustration -->
    <div
      class="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10"
      aria-hidden="true"
    >
      <img
        src="../images/hero-illustration.svg"
        class="max-w-none opacity-5"
        width="1440"
        height="1265"
        alt="Hero Illustration"
      />
    </div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Hero image -->
      <div class="" data-aos="fade-up" data-aos-delay="300">
        <img class="mx-auto" src="../images/v5.gif" alt="AUGMENTED" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AugmentedHero",
};
</script>
