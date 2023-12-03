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
      <Workshift v-if="tab == 0"></Workshift>
      <Receive v-if="tab == 1"></Receive>
      <Spend v-if="tab == 2"></Spend>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth'
})

const tab = ref(0)
const onTabChange = (index) => tab.value = index
</script>