<template>
  <section class="relative">
    <!-- Bg illustration -->
    <div
      class="absolute left-1/2 -translate-x-1/2 pointer-events-none -mt-20 -z-10"
      aria-hidden="true"
    >
      <img
        src="../images/features-illustration.svg"
        class="max-w-none"
        width="1440"
        height="440"
        alt="Illustration"
      />
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 font-hkgrotesk mb-4 uppercase">A(I)UGMENT Yourself</h2>
          <div class="max-w-2xl mx-auto">
            <p class="text-xl text-slate-500">
              I run an course focused around upgrading yourself with AI.<br />
            </p>
            <p class="text-lg text-slate-500">
              The next course will be available for purchase online, and should come out in March of 2025. Stay tuned!<br /><br />
            </p>
            <p class="text-xl text-slate-500">Here's what you'll learn:</p>
          </div>
        </div>

        <!-- * Custom styles in src/css/additional-styles/theme.scss -->
        <div class="carousel swiper-container">
          <div class="swiper-wrapper">
            <!-- Carousel items -->
            <div
              class="swiper-slide h-auto flex flex-col bg-slate-800 p-6 rounded"
            >
              <img
                class="mb-3"
                src="../images/features-icon-01.svg"
                width="56"
                height="56"
                alt="Icon 01"
              />
              <div class="grow">
                <div class="font-hkgrotesk font-bold text-lg">
                  What's Coming
                </div>
                <ul class="text-slate-500 mb-3 list-disc mt-2 pl-4 ml-3">
                  <li>What I see coming for us</li>
                  <li>How it'll affect jobs and society</li>
                  <li>Considerations for preparation</li>
                </ul>
              </div>
              <!-- <div class="text-right">
                <a class="font-medium text-indigo-500 inline-flex items-center transition duration-150 ease-in-out group" href="#0">Learn More <span class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a>
              </div> -->
            </div>
            <div
              class="swiper-slide h-auto flex flex-col bg-slate-800 p-6 rounded"
            >
              <img
                class="mb-3"
                src="../images/features-icon-02.svg"
                width="56"
                height="56"
                alt="Icon 02"
              />
              <div class="grow">
                <div class="font-hkgrotesk font-bold text-xl">
                  Skillsets and Mental Frames
                </div>
                <ul class="text-slate-500 mb-3 list-disc mt-2 pl-4 ml-3">
                  <li>Mandatory skillsets and mental frames</li>
                  <li>What to read, study, and learn post-AI</li>
                  <li>What advice to give young people</li>
                </ul>
              </div>
              <!-- <div class="text-right">
                <a class="font-medium text-indigo-500 inline-flex items-center transition duration-150 ease-in-out group" href="#0">Learn More <span class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a>
              </div> -->
            </div>
            <div
              class="swiper-slide h-auto flex flex-col bg-slate-800 p-6 rounded"
            >
              <img
                class="mb-3"
                src="../images/features-icon-03.svg"
                width="56"
                height="56"
                alt="Icon 03"
              />
              <div class="grow">
                <div class="font-hkgrotesk font-bold text-xl">Your Personal AI Infrastructure</div>
                <ul class="text-slate-500 mb-3 list-disc mt-2 pl-4 ml-3">
                  <li>Building your own AI microservices</li>
                  <li>Building your own Agent</li>
                  <li>OS integrations to your AI</li>
                  <li>Integrating your AI into your life workflows</li>
                </ul>
              </div>
              <!-- <div class="text-right">
                <a class="font-medium text-indigo-500 inline-flex items-center transition duration-150 ease-in-out group" href="#0">Learn More <span class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a>
              </div> -->
            </div>
            <div
              class="swiper-slide h-auto flex flex-col bg-slate-800 p-6 rounded"
            >
              <img
                class="mb-3"
                src="../images/features-icon-04.svg"
                width="56"
                height="56"
                alt="Icon 04"
              />
              <div class="grow">
                <div class="font-hkgrotesk font-bold text-xl">Human 3.0</div>
                <ul class="text-slate-500 mb-3 list-disc mt-2 pl-4 ml-3">
                  <li>What is Human 3.0</li>
                  <li>Getting your H3 score</li>
                  <li>How to Move towards H3</li>
                  <li>Building your H3 plan</li>
                </ul>
              </div>
              <!-- <div class="text-right">
                <a class="font-medium text-indigo-500 inline-flex items-center transition duration-150 ease-in-out group" href="#0">Learn More <span class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a>
              </div> -->
            </div>
          </div>
        </div>

        <!-- Arrows -->
        <div class="flex mt-12 space-x-4 justify-end">
          <button
            class="carousel-prev relative z-20 w-14 h-14 rounded-full flex items-center justify-center group border border-slate-700 bg-slate-800 hover:bg-slate-700 transition duration-150 ease-in-out"
          >
            <span class="sr-only">Previous</span>
            <svg
              class="w-4 h-4 fill-slate-400 transition duration-150 ease-in-out"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
            </svg>
          </button>
          <button
            class="carousel-next relative z-20 w-14 h-14 rounded-full flex items-center justify-center group border border-slate-700 bg-slate-800 hover:bg-slate-700 transition duration-150 ease-in-out"
          >
            <span class="sr-only">Next</span>
            <svg
              class="w-4 h-4 fill-slate-400 transition duration-150 ease-in-out"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Import Swiper
import Swiper, { Autoplay, Navigation } from "swiper";
import "swiper/css";
Swiper.use([Autoplay, Navigation]);

export default {
  name: "Features",
  mounted() {
    // eslint-disable-next-line no-unused-vars
    const carousel = new Swiper(".carousel", {
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      autoplay: {
        delay: 7000,
      },
      navigation: {
        nextEl: ".carousel-next",
        prevEl: ".carousel-prev",
      },
    });
  },
};
</script>
