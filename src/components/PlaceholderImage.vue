<template>
  <div :class="[
    'flex items-center justify-center bg-gray-200',
    'text-gray-500 font-medium text-sm',
    className
  ]">
    {{ text || 'Placeholder' }}
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: ''
  },
  className: {
    type: String,
    default: 'h-12 w-32'
  }
})
</script> 