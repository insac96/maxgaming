<template>
  <div>
    <UiFlex class="mb-2">
      <UTabs 
        :items="[
          { label: 'Ca Làm Việc' },
          { label: 'Khoản Thu' },
          { label: 'Khoản Chi' }
        ]" 
        :default-index="tab" 
        @change="onTabChange"
      />
    </UiFlex>

    <div>
      <StaffWorkshift v-if="tab == 0"></StaffWorkshift>
      <StaffReceive v-if="tab == 1"></StaffReceive>
      <StaffSpend v-if="tab == 2"></StaffSpend>
    </div>
  </div>
</template>

<script setup>
const tab = ref(0)
const onTabChange = (index) => tab.value = index
</script>