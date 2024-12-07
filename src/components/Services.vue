<template>
    <section
        id="services"
        ref="sectionRef"
        class="py-20 bg-gray-50"
        data-visible="false"
    >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
                ref="headingRef"
                data-visible="false"
                class="text-center fade-scale"
            >
                <h2 class="text-3xl font-extrabold text-secondary sm:text-4xl">
                    {{ $t('services.title') }}
                </h2>
                <p class="mt-4 text-xl text-gray-600">
                    {{ $t('services.subtitle') }}
                </p>
            </div>
            <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
                <div
                    class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div class="p-6">
                        <div class="text-primary mb-4">
                            <Icon icon="tabler:shield-check" class="size-12" />
                        </div>
                        <h3 class="text-xl font-semibold text-secondary mb-2">
                            {{ $t('services.risk.title') }}
                        </h3>
                        <p class="text-gray-600">{{ $t('services.risk.desc') }}</p>
                    </div>
                </div>
                <div
                    class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div class="p-6">
                        <div class="text-primary mb-4">
                            <Icon icon="tabler:building" class="size-12" />
                        </div>
                        <h3 class="text-xl font-semibold text-secondary mb-2">
                            {{ $t('services.training.title') }}
                        </h3>
                        <p class="text-gray-600">{{ $t('services.training.desc') }}</p>
                    </div>
                </div>
                <div
                    class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div class="p-6">
                        <div class="text-primary mb-4">
                            <Icon icon="tabler:clipboard" class="size-12" />
                        </div>
                        <h3 class="text-xl font-semibold text-secondary mb-2">
                            {{ $t('services.compliance.title') }}
                        </h3>
                        <p class="text-gray-600">{{ $t('services.compliance.desc') }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { useScrollAnimation } from '../composables/useScrollAnimation'

    const sectionRef = useScrollAnimation()
    const headingRef = useScrollAnimation()
</script>
