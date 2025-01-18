import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')
    return {
        base: '/samir/',
        plugins: [
            vue(),
            vueDevTools()
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        build: {
            assetsDir: 'assets',
            rollupOptions: {
                output: {
                    manualChunks: undefined
                }
            }
        },
        define: {
            'process.env': env
        }
    }
})
