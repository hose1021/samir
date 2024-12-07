<template>
    <section id="contact" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="border rounded-full bg-gradient-to-t from-sky-600 to-sky-900">
                <div class="flex justify-between p-12">
                    <div>
                        <h2 class="text-3xl font-extrabold text-gray-50 sm:text-4xl">
                            {{ $t('contact.title') }}
                        </h2>
                        <p class="mt-4 text-xl text-gray-300">
                            {{ $t('contact.subtitle') }}
                        </p>
                    </div>
                    <div class="flex space-x-12 w-max ml-auto">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <Icon icon="tabler:phone" class="h-6 w-6 text-primary" />
                            </div>
                            <div class="ml-3">
                                <h3 class="text-lg font-medium text-gray-50">
                                    {{ $t('contact.info.phone') }}
                                </h3>
                                <p class="mt-1 text-gray-300">+994 12 345 67 89</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <Icon icon="tabler:mail" class="h-6 w-6 text-primary" />
                            </div>
                            <div class="ml-3">
                                <h3 class="text-lg font-medium text-gray-50">
                                    {{ $t('contact.info.email') }}
                                </h3>
                                <p class="mt-1 text-gray-300">hse@prosafetyazerbaijan.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    // Здесь можно добавить логику обработки формы
</script>
