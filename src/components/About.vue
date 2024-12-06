<template>
    <section id="about" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div class="relative">
                    <h2 class="text-3xl font-extrabold text-secondary sm:text-4xl">
                        {{ $t('about.title') }}
                    </h2>
                    <p class="mt-4 text-lg text-gray-600">
                        {{ $t('about.desc') }}
                    </p>
                </div>
                <div class="mt-10 lg:mt-0">
                    <div class="aspect-w-16 aspect-h-9">
                        <PlaceholderImage
                            text="About Image"
                            className="rounded-lg shadow-lg w-full h-[400px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import PlaceholderImage from './PlaceholderImage.vue'
</script>
