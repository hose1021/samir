<template>
    <section id="why" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
                ref="headingRef"
                data-visible="false"
                class="text-center fade-scale"
            >
                <h2 class="text-3xl font-extrabold text-secondary sm:text-4xl">
                    {{ $t('why.title') }}
                </h2>
            </div>
            <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 stagger-children">
                <div
                    v-for="(item, key) in ['experience', 'professionalism', 'approach', 'quality']"
                    :key="key"
                    class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                    <div class="p-6">
                        <div class="text-primary mb-4">
                            <Icon :icon="getIcon(key)" class="size-12" />
                        </div>
                        <h3 class="text-xl font-semibold text-secondary mb-2">
                            {{ $t(`why.items.${item}.title`) }}
                        </h3>
                        <p class="text-gray-600">{{ $t(`why.items.${item}.desc`) }}</p>
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
            experience: 'tabler:award',
            professionalism: 'tabler:users',
            approach: 'tabler:target',
            quality: 'tabler:certificate'
        }
        return icons[key] || 'tabler:info-circle'
    }
</script> 