<template>
    <section id="contact" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-gradient-to-t from-sky-600 to-sky-900 rounded-2xl shadow-xl">
                <div class="p-6 sm:p-8 md:p-12 flex flex-col md:flex-row md:justify-between md:items-center gap-8">
                    <div class="text-center md:text-left">
                        <h2 class="text-3xl font-extrabold text-gray-50 sm:text-4xl">
                            {{ $t('contact.title') }}
                        </h2>
                        <p class="mt-4 text-lg sm:text-xl text-gray-300">
                            {{ $t('contact.subtitle') }}
                        </p>
                    </div>
                    
                    <div class="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-6 md:gap-8">
                        <div class="flex items-center justify-center md:justify-start">
                            <div class="flex-shrink-0">
                                <Icon icon="tabler:phone" class="h-6 w-6 text-primary" />
                            </div>
                            <div class="ml-3">
                                <h3 class="text-lg font-medium text-gray-50">
                                    {{ $t('contact.phone') }}
                                </h3>
                                <p class="mt-1 text-gray-300">{{ $t('contact.phoneNumber') }}</p>
                            </div>
                        </div>
                        
                        <div class="flex items-center justify-center md:justify-start">
                            <div class="flex-shrink-0">
                                <Icon icon="tabler:mail" class="h-6 w-6 text-primary" />
                            </div>
                            <div class="ml-3">
                                <h3 class="text-lg font-medium text-gray-50">
                                    {{ $t('contact.email') }}
                                </h3>
                                <p class="mt-1 text-gray-300">{{ $t('contact.emailAddress') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { Icon } from '@iconify/vue'
</script>
