import { onMounted, ref } from 'vue'

export function useScrollAnimation() {
    const elementRef = ref(null)

    onMounted(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.setAttribute('data-visible', 'true')
                        observer.unobserve(entry.target) // Stop observing once animated
                    }
                })
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
                rootMargin: '50px' // Start animation slightly before element comes into view
            }
        )

        if (elementRef.value) {
            observer.observe(elementRef.value)
        }
    })

    return elementRef
} 