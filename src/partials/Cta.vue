<template>
  <section class="relative border-t border-slate-800">

    <!-- Bg gradient: top -->
    <div class="absolute top-0 left-0 right-0 bg-gradient-to-b from-slate-800 to-transparent opacity-25 h-[25rem] pointer-events-none -z-10" aria-hidden="true"></div>

    <!-- Illustration -->
    <div class="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 -mt-8 pointer-events-none -z-10" aria-hidden="true">
      <img src="../images/cta-illustration.svg" class="max-w-none" width="1440" height="440" alt="Features 01 Illustration">
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20" data-aos="fade-up">
          <h2 class="h2 font-hkgrotesk">Integrate AI Into Your Life and Career to Stay Ahead.</h2>
        </div>

        <!-- Buttons -->
        <div class="text-center">
          <div class="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div data-aos="fade-up" data-aos-delay="100">
              <a class="btn text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group" href="https://book.stripe.com/fZe2bLdbK8pwgYE6oF">
                Register Today <span class="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Cta',
}
</script>
