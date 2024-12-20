<template>
    <section id="why" class="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
                ref="headingRef"
                data-visible="false"
                class="text-center fade-scale mb-12"
            >
                <h2 class="text-4xl font-extrabold text-secondary sm:text-4xl">
                    {{ $t('why.title') }}
                </h2>
                <div class="w-24 h-1 bg-primary mx-auto mt-4"></div>
            </div>
            <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 stagger-children">
                <div
                    v-for="(item, key) in ['experience', 'professionalism', 'approach', 'quality']"
                    :key="key"
                    class="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                    <div class="p-8">
                        <div class="text-primary mb-6 transform transition-transform duration-300">
                            <Icon :icon="getIcon(key)" class="size-16" />
                        </div>
                        <h3 class="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                            {{ $t(`why.items.${item}.title`) }}
                        </h3>
                        <p class="text-gray-600 leading-relaxed">
                            {{ $t(`why.items.${item}.desc`) }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { useScrollAnimation } from '../composables/useScrollAnimation'

    const headingRef = useScrollAnimation()

    const getIcon = (key) => {
        const icons = {
            experience: 'tabler:chart-dots',
            professionalism: 'tabler:certificate-2',
            approach: 'tabler:focus-2',
            quality: 'tabler:shield-check'
        }
        return icons[key] || 'tabler:info-circle'
    }
</script> 