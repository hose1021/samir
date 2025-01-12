<template>
    <nav class="bg-white shadow-lg fixed w-full z-50">
        <div
            v-motion
            :initial="{ opacity: 0, y: -20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
            class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
            <div class="flex justify-between h-16">
                <div class="flex items-center bg-gray-700 rounded p-1 m-1">
                    <div class="flex-shrink-0">
                        <img src="../assets/logo.png" class="h-12" alt="LOGO" />
                    </div>
                    <span class="text-primary font-semibold">Pro Safety</span>
                    <span class="text-white ml-1">Azerbaijan</span>
                </div>

                <div class="hidden md:flex items-center space-x-8">
                    <a
                        href="#home"
                        class="text-secondary hover:text-primary px-3 py-2 text-sm font-medium"
                    >{{ $t('nav.home') }}</a
                    >
                    <a
                        href="#about"
                        class="text-secondary hover:text-primary px-3 py-2 text-sm font-medium"
                    >{{ $t('nav.about') }}</a
                    >
                    <a
                        href="#purpose"
                        class="text-secondary hover:text-primary px-3 py-2 text-sm font-medium"
                    >{{ $t('nav.purpose') }}</a
                    >
                    <a
                        href="#services"
                        class="text-secondary hover:text-primary px-3 py-2 text-sm font-medium"
                    >{{ $t('nav.services') }}</a
                    >
                    <a
                        href="#why"
                        class="text-secondary hover:text-primary px-3 py-2 text-sm font-medium"
                    >{{ $t('nav.why') }}</a
                    >
                    <a
                        href="#contact"
                        class="text-secondary hover:text-primary px-3 py-2 text-sm font-medium"
                    >{{ $t('nav.contact') }}</a
                    >
                    <LanguageSwitcher />
                </div>

                <!-- Mobile menu button -->
                <div class="flex items-center md:hidden">
                    <button
                        @click="isOpen = !isOpen"
                        class="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-primary focus:outline-none"
                    >
                        <span class="sr-only">Open main menu</span>
                        <Icon :icon="isOpen ? 'mdi:close' : 'mdi:menu'" class="h-6 w-6" />
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile menu -->
        <transition name="slide-fade">
            <div v-show="isOpen" class="md:hidden">
                <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a
                        href="#home"
                        class="text-secondary hover:text-primary block px-3 py-2 text-base font-medium"
                    >{{ $t('nav.home') }}</a
                    >
                    <a
                        href="#about"
                        class="text-secondary hover:text-primary block px-3 py-2 text-base font-medium"
                    >{{ $t('nav.about') }}</a
                    >
                    <a
                        href="#purpose"
                        class="text-secondary hover:text-primary block px-3 py-2 text-base font-medium"
                    >{{ $t('nav.purpose') }}</a
                    >
                    <a
                        href="#services"
                        class="text-secondary hover:text-primary block px-3 py-2 text-base font-medium"
                    >{{ $t('nav.services') }}</a
                    >
                    <a
                        href="#why"
                        class="text-secondary hover:text-primary block px-3 py-2 text-base font-medium"
                    >{{ $t('nav.why') }}</a
                    >
                    <a
                        href="#contact"
                        class="text-secondary hover:text-primary block px-3 py-2 text-base font-medium"
                    >{{ $t('nav.contact') }}</a
                    >
                    <div class="px-3 py-2">
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </transition>
    </nav>
</template>

<script setup>
    import { ref } from 'vue'
    import LanguageSwitcher from './LanguageSwitcher.vue'

    const isOpen = ref(false)
</script>

<style>
    .slide-fade-enter-active, .slide-fade-leave-active {
        transition: all 0.3s ease;
    }

    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateY(-10px);
        opacity: 0;
    }
</style>