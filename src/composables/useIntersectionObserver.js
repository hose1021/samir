import { onMounted, onUnmounted } from 'vue'

export function useIntersectionObserver(elementRef, callback, options = {}) {
    let observer = null

    onMounted(() => {
        observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    callback(entry)
                }
            })
        }, options)

        if (elementRef.value) {
            observer.observe(elementRef.value)
        }
    })

    onUnmounted(() => {
        if (observer) {
            observer.disconnect()
        }
    })

    return observer
} 