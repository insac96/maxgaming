<template>
  <UDropdown :items="menu" :popper="{ placement: 'bottom-start' }">
    <UButton color="gray" icon="i-bx-menu" />
  </UDropdown>
</template>

<script setup>
const menu = [[
  {
    label: 'Nhân viên',
    click: () => navigateTo('/admin/staff')
  },
  {
    label: 'Ca làm viêc',
    click: () => navigateTo('/admin/workshift')
  },
  {
    label: 'Khoản thu',
    click: () => navigateTo('/admin/receive')
  },
  {
    label: 'Khoản chi',
    click: () => navigateTo('/admin/spend')
  }
]]
</script>