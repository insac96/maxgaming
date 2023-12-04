<template>
  <UVerticalNavigation :links="navItems" />
</template>

<script setup>
const emit = defineEmits(['to'])

const navItems = [
  {
    label: 'Tài khoản',
    to: '/admin/user'
  },
  {
    label: 'Ca làm viêc',
    to: '/admin/workshift'
  },
  {
    label: 'Khoản thu',
    to: '/admin/receive'
  },
  {
    label: 'Khoản chi',
    to: '/admin/spend'
  }
]
</script>