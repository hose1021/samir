<template>
    <div class="relative bg-secondary pt-16">
        <div class="absolute inset-0 overflow-hidden">
            <PlaceholderImage text="Hero Background" className="w-full h-full opacity-10" />
        </div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div class="text-center">
                <h1
                    class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
                >
                    {{ $t('hero.title') }}
                </h1>
                <p class="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
                    {{ $t('hero.subtitle') }}
                </p>
                <div class="mt-10">
                    <a
                        href="#contact"
                        class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-orange-600 md:text-lg"
                    >
                        {{ $t('hero.cta') }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import PlaceholderImage from './PlaceholderImage.vue'
</script>
