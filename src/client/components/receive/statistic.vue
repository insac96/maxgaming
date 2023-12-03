<template>
  <div class="grid grid-cols-12 gap-4" v-if="statistic">
    <UCard class="md:col-span-4 col-span-6">
      <UiFlex type="col">
        <UiText weight="semibold" color="primary" size="sm" class="mb-2">Chuyển Khoản</UiText>
        <UiText size="3xl">{{ useMoney().toMoney(statistic.banking) }}</UiText>
      </UiFlex>
    </UCard>
  
    <UCard class="md:col-span-4 col-span-6">
      <UiFlex type="col">
        <UiText weight="semibold" color="primary" size="sm" class="mb-2">Tiền Mặt</UiText>
        <UiText size="3xl">{{ useMoney().toMoney(statistic.cash) }}</UiText>
      </UiFlex>
    </UCard>

    <UCard class="md:col-span-4 col-span-12">
      <UiFlex type="col">
        <UiText weight="semibold" color="primary" size="sm" class="mb-2">Tất Cả</UiText>
        <UiText size="3xl">{{ useMoney().toMoney(statistic.total) }}</UiText>
      </UiFlex>
    </UCard>
  </div>
</template>

<script setup>
const props = defineProps(['statistic'])
</script>