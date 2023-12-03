<template>
  <UCard v-if="statistic">
    <div class="grid grid-cols-12 gap-4">
      <UiFlex type="col" class="md:col-span-4 col-span-6">
        <UiText weight="semibold" color="primary">Tiền mặt</UiText>
        <UiText size="3xl">{{ useMoney().toMoney(statistic.cash) }}</UiText>
      </UiFlex>

      <UiFlex type="col" class="md:col-span-4 col-span-6">
        <UiText weight="semibold" color="primary">Chuyển khoản</UiText>
        <UiText size="3xl">{{ useMoney().toMoney(statistic.banking) }}</UiText>
      </UiFlex>

      <UiFlex type="col" class="md:col-span-4 col-span-12">
        <UiText weight="semibold" color="primary">Tổng</UiText>
        <UiText size="3xl">{{ useMoney().toMoney(statistic.total) }}</UiText>
      </UiFlex>
    </div>
  </UCard>
</template>

<script setup>
const props = defineProps(['statistic'])
</script>