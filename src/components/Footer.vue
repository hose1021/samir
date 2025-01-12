<template>
    <footer class="bg-secondary py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
                class="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                <!-- Company Info -->
                <div class="col-span-1 md:col-span-2">
                    <img src="../assets/logo.png" class="h-16" alt="LOGO" />
                    <p class="mt-4 text-gray-300">
                        {{ $t('about.desc') }}
                    </p>
                </div>

                <!-- Quick Links -->
                <div>
                    <h3 class="text-white font-semibold mb-4">{{ $t('footer.links') }}</h3>
                    <ul class="space-y-2">
                        <li>
                            <a href="#home" class="text-gray-300 hover:text-primary">{{
                                    $t('nav.home')
                                }}</a>
                        </li>
                        <li>
                            <a href="#services" class="text-gray-300 hover:text-primary">{{
                                    $t('nav.services')
                                }}</a>
                        </li>
                        <li>
                            <a href="#about" class="text-gray-300 hover:text-primary">{{
                                    $t('nav.about')
                                }}</a>
                        </li>
                        <li>
                            <a href="#contact" class="text-gray-300 hover:text-primary">{{
                                    $t('nav.contact')
                                }}</a>
                        </li>
                    </ul>
                </div>

                <!-- Social Links -->
                <div>
                    <h3 class="text-white font-semibold mb-4">{{ $t('footer.follow') }}</h3>
                    <div class="flex flex-wrap gap-4">
                        <!-- Facebook -->
                        <a href="https://www.facebook.com/profile.php?id=61571150974710"
                           class="text-gray-300 hover:text-primary">
                            <span class="sr-only">Facebook</span>
                            <Icon icon="mdi:facebook" class="h-6 w-6" />
                        </a>

                        <!-- Instagram -->
                        <a href="https://www.instagram.com/prosafety.az/profilecard/?igsh=MTV5cXdmZDUwcnZqdw=="
                           class="text-gray-300 hover:text-primary">
                            <span class="sr-only">Instagram</span>
                            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    fill-rule="evenodd"
                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </a>

                        <!-- Twitter/X -->
                        <a href="https://x.com/Prosafety_az" class="text-gray-300 hover:text-primary">
                            <span class="sr-only">Twitter</span>
                            <Icon icon="simple-icons:x" class="h-6 w-6" />
                        </a>

                        <!-- LinkedIn -->
                        <a href="https://www.linkedin.com/company/105345753/admin/dashboard/"
                           class="text-gray-300 hover:text-primary">
                            <span class="sr-only">LinkedIn</span>
                            <Icon icon="mdi:linkedin" class="h-6 w-6" />
                        </a>

                        <!-- TikTok -->
                        <a href="https://www.tiktok.com/@prosafety.az?_t=8sVmdeNdMa0&_r=1"
                           class="text-gray-300 hover:text-primary">
                            <span class="sr-only">TikTok</span>
                            <Icon icon="ic:baseline-tiktok" class="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>

            <div class="mt-8 border-t border-gray-700 pt-8">
                <p class="text-gray-300 text-center">
                    {{ $t('footer.rights', { year: new Date().getFullYear() }) }}
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup></script>
