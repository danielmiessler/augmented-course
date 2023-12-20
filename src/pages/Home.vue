<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <Header />
    <main class="grow">
      <AugmentedHero />
      <Features />
      <Cta />
    </main>
    <Footer />    

  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import AugmentedHero from '../partials/AugmentedHero.vue'
import Features from '../partials/Features.vue'
import Cta from '../partials/Cta.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    AugmentedHero,
    Features,
    Cta,
    Footer,
},
}
</script>