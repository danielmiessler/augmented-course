<template>
  <section class="relative">

    <!-- Illustration -->
    <div class="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
      <img src="../images/hero-illustration.svg" class="max-w-none" width="1440" height="1265" alt="Hero Illustration">
    </div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 md:pt-40">

        <!-- Hero content -->
        <div class="max-w-3xl mx-auto text-center">

          <h1 class="h1 font-hkgrotesk mb-6" data-aos="fade-up">A powerful suite of user-centric products</h1>
          <p class="text-xl text-slate-500 mb-10" data-aos="fade-up" data-aos-delay="100">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
          <div class="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4" data-aos="fade-up" data-aos-delay="200">
            <div>
              <router-link class="btn text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group" to="/signup">
                Get Started Free <span class="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </router-link>
            </div>
            <div>
              <a class="btn text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600 w-full shadow-sm" href="#0">Read Docs</a>
            </div>
          </div>

        </div>

        <!-- Hero image -->
        <div class="pt-16 md:pt-20" data-aos="fade-up" data-aos-delay="300">
          <img class="mx-auto" src="../images/v5.gif" width="920" height="518" alt="Hero">
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
}
</script>