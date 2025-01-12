<template>
    <div class="relative bg-secondary pt-16">
        <div class="absolute inset-0 overflow-hidden">
            <img
                src="../assets/heroBackground.jpg"
                title="Purpose Image"
                class="w-full h-full opacity-10 object-cover object-top"
                alt="Purpose Image"
            />
            <!--            <PlaceholderImage text="Hero Background" className="w-full h-full opacity-10" />-->
        </div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div class="text-center">
                <h1
                    v-motion
                    :initial="{ opacity: 0, y: 50 }"
                    :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
                    class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
                >
                    {{ $t('hero.title') }}
                </h1>
                <p
                    v-motion
                    :initial="{ opacity: 0, y: 50 }"
                    :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
                    class="mt-6 max-w-2xl mx-auto text-xl text-gray-300"
                >
                    {{ $t('hero.subtitle') }}
                </p>
                <div
                    v-motion
                    :initial="{ opacity: 0, y: 50 }"
                    :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 400 } }"
                    class="mt-10"
                >
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

<script setup></script>
