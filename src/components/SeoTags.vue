<script setup>
    import { computed, onMounted, watch } from 'vue'
    import { useI18n } from 'vue-i18n'

    const props = defineProps({
        title: {
            type: String,
            default: import.meta.env.VITE_DEFAULT_TITLE
        },
        description: {
            type: String,
            default: import.meta.env.VITE_DEFAULT_DESCRIPTION
        },
        image: {
            type: String,
            default: new URL(import.meta.env.VITE_DEFAULT_OG_IMAGE, import.meta.env.VITE_SITE_URL).href
        },
        url: {
            type: String,
            default: import.meta.env.VITE_SITE_URL
        }
    })

    const { locale } = useI18n()

    const htmlLang = computed(() => locale.value)
    const canonicalUrl = computed(() => new URL(window.location.pathname, import.meta.env.VITE_SITE_URL).href)

    // Update document properties
    const updateDocumentProperties = () => {
        document.documentElement.lang = htmlLang.value
        document.title = props.title
    }

    // Update meta tags
    const updateMetaTags = () => {
        // Basic meta
        document.querySelector('meta[name="description"]').setAttribute('content', props.description)

        // Canonical URL
        document.querySelector('link[rel="canonical"]').setAttribute('href', canonicalUrl.value)

        // Open Graph
        document.querySelector('meta[property="og:title"]').setAttribute('content', props.title)
        document.querySelector('meta[property="og:description"]').setAttribute('content', props.description)
        document.querySelector('meta[property="og:image"]').setAttribute('content', props.image)
        document.querySelector('meta[property="og:url"]').setAttribute('content', canonicalUrl.value)

        // Twitter
        document.querySelector('meta[property="twitter:title"]').setAttribute('content', props.title)
        document.querySelector('meta[property="twitter:description"]').setAttribute('content', props.description)
        document.querySelector('meta[property="twitter:image"]').setAttribute('content', props.image)
        document.querySelector('meta[property="twitter:url"]').setAttribute('content', canonicalUrl.value)
    }

    // Update when props or locale changes
    watch([props, locale], () => {
        updateDocumentProperties()
        updateMetaTags()
    }, { deep: true })

    // Initial update
    onMounted(() => {
        updateDocumentProperties()
        updateMetaTags()
    })
</script>

<template>
    <!-- This component doesn't render anything -->
</template> 