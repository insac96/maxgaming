<template>
  <UDropdown :items="menu" :popper="{ placement: 'bottom-end' }">
    <UButton 
      icon="i-bxs-user"
      color="gray" 
      variant="ghost" 
      aria-label="Theme"
    />
  </UDropdown>
</template>

<script setup>
const menu = [
  [{
    label: 'Tài khoản',
    icon: 'i-bx-user',
    click: () => {}
  },{
    label: 'Đăng xuất',
    icon: 'i-bx-log-out',
    click: () => {}
  }]
]
</script>