<template>
    <div class="relative inline-block text-left">
        <button
            @click="isOpen = !isOpen"
            class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
            {{ currentLanguage }}
            <svg
                class="w-5 h-5 ml-2 -mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                />
            </svg>
        </button>

        <div
            v-if="isOpen"
            class="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        >
            <div class="py-1" role="menu">
                <button
                    v-for="lang in languages"
                    :key="lang.code"
                    @click="changeLanguage(lang.code)"
                    class="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                >
                    {{ lang.name }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue'
    import { useI18n } from 'vue-i18n'

    const { locale } = useI18n()
    const isOpen = ref(false)

    const languages = [
        { code: 'az', name: 'Azərbaycan' },
        { code: 'ru', name: 'Русский' },
        { code: 'en', name: 'English' }
    ]

    const currentLanguage = computed(() => {
        const lang = languages.find(l => l.code === locale.value)
        return lang ? lang.name : 'Language'
    })

    const changeLanguage = langCode => {
        locale.value = langCode
        isOpen.value = false
    }
</script>
