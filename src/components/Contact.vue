<template>
    <section id="contact" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h2 class="text-3xl font-extrabold text-secondary sm:text-4xl">
                    {{ $t('contact.title') }}
                </h2>
                <p class="mt-4 text-xl text-gray-600">
                    {{ $t('contact.subtitle') }}
                </p>
            </div>

            <div class="mt-16 lg:grid lg:grid-cols-2 lg:gap-8">
                <!-- Contact Form -->
                <div class="relative">
                    <form class="space-y-6">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700">{{
                                    $t('contact.form.name')
                                }}</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                            />
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700">{{
                                    $t('contact.form.email')
                                }}</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                            />
                        </div>
                        <div>
                            <label for="message" class="block text-sm font-medium text-gray-700">{{
                                    $t('contact.form.message')
                                }}</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            >
                                {{ $t('contact.form.send') }}
                            </button>
                        </div>
                    </form>
                </div>

                <!-- Contact Information -->
                <div class="mt-12 lg:mt-0">
                    <div class="bg-white rounded-lg shadow-lg p-8">
                        <div class="space-y-6">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <Icon icon="mdi:phone" class="h-6 w-6 text-primary" />
                                </div>
                                <div class="ml-3">
                                    <h3 class="text-lg font-medium text-secondary">{{ $t('contact.info.phone') }}</h3>
                                    <p class="mt-1 text-gray-600">+994 12 345 67 89</p>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <Icon icon="mdi:email-outline" class="h-6 w-6 text-primary" />
                                </div>
                                <div class="ml-3">
                                    <h3 class="text-lg font-medium text-secondary">{{ $t('contact.info.email') }}</h3>
                                    <p class="mt-1 text-gray-600">info@hse.az</p>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <Icon icon="mdi:map-marker" class="h-6 w-6 text-primary" />
                                </div>
                                <div class="ml-3">
                                    <h3 class="text-lg font-medium text-secondary">
                                        {{ $t('contact.info.address') }}
                                    </h3>
                                    <p class="mt-1 text-gray-600">{{ $t('contact.info.addressText') }}</p>
                                </div>
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
