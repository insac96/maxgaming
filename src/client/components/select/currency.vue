<template>
  <USelectMenu 
    v-model="currency" 
    size="lg" 
    value-attribute="value"
    :options="currencyOption"
  >
    <template #label>
      <span v-if="!currency">Chọn nguồn tiền</span>
      <span v-else>{{ currencyType[currency] }}</span>
    </template>
  </USelectMenu>
</template>

<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const currency = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
}) 

const currencyOption = [
  { label: 'Chuyển khoản', value: 'BANKING' },
  { label: 'Tiền mặt', value: 'CASH' },
]

const currencyType = {
  'BANKING': 'Chuyển khoản',
  'CASH': 'Tiền mặt'
}
</script>