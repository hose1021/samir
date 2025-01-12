<template>
    <section id="purpose" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div
                    ref="contentRef"
                    data-visible="false"
                    class="relative slide-from-left"
                >
                    <h2 class="text-3xl font-extrabold text-secondary sm:text-4xl">
                        {{ $t('purpose.title') }}
                    </h2>
                    <p class="mt-4 text-lg text-gray-600">
                        {{ $t('purpose.desc') }}
                    </p>
                </div>
                <div
                    ref="imageRef"
                    data-visible="false"
                    class="mt-10 lg:mt-0 slide-from-right"
                >
                    <div class="aspect-w-16 aspect-h-9">
                        <img
                            src="../assets/purpose.jpg"
                            title="Purpose Image"
                            class="rounded-lg shadow-lg w-full h-full object-cover"
                            alt="Purpose Image"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { useScrollAnimation } from '../composables/useScrollAnimation'

    const contentRef = useScrollAnimation()
    const imageRef = useScrollAnimation()
</script> 