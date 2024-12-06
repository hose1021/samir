<script setup>
    import { useI18n } from 'vue-i18n'
    import Navbar from './components/Navbar.vue'
    import Hero from './components/Hero.vue'
    import Services from './components/Services.vue'
    import About from './components/About.vue'
    import Contact from './components/Contact.vue'
    import Footer from './components/Footer.vue'
    import SeoTags from './components/SeoTags.vue'

    const { t } = useI18n()
</script>

<template>
    <SeoTags
        :title="t('seo.title')"
        :description="t('seo.description')"
    />
    <div class="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
    </div>
</template>
