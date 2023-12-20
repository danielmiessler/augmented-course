<template>
  <footer>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Bottom area -->
      <div class="md:flex md:items-center md:justify-between pb-4 md:pb-8">

        <!-- Social links -->
        <ul class="flex mb-4 md:order-1 md:ml-4 md:mb-0">
          <li>
            <a class="flex justify-center items-center text-indigo-500 hover:text-slate-300 transition duration-150 ease-in-out" href="https://twitter.com/DanielMiessler" aria-label="Twitter">
              <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
              </svg>
            </a>
          </li>
          <li class="ml-2">
            <a class="flex justify-center items-center text-indigo-500 hover:text-slate-300 transition duration-150 ease-in-out" href="https://github.com/danielmiessler" aria-label="Github">
              <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
              </svg>
            </a>
          </li>
        </ul>

        <!-- Links -->
        <div class="text-sm text-slate-600">
          <a class="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out" href="#0">Terms</a> · <a class="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out" href="#0">Privacy Policy</a>
        </div>

      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>