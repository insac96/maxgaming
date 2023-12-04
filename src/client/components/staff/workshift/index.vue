<template>
  <div v-if="!!workshift && !!receive && !!spend" class="mb-4">
    <UiFlex class="mb-4">
      <UInput icon="i-bx-time" :model-value="useDayJs().displayFull(workshift.start)" readonly></UInput>
    </UiFlex>

    <div class="grid grid-cols-12 gap-4">
      <UCard class="md:col-span-4 col-span-6">
        <UiFlex type="col">
          <UiText weight="semibold" color="primary" size="sm" class="mb-2">Khoản Thu</UiText>
          <UiText size="3xl">{{ useMoney().toMoney(receive.total) }}</UiText>
        </UiFlex>
      </UCard>
    
      <UCard class="md:col-span-4 col-span-6">
        <UiFlex type="col">
          <UiText weight="semibold" color="primary" size="sm" class="mb-2">Khoản Chi</UiText>
          <UiText size="3xl">{{ useMoney().toMoney(spend.total) }}</UiText>
        </UiFlex>
      </UCard>

      <UCard class="md:col-span-4 col-span-12">
        <UiFlex type="col">
          <UiText weight="semibold" color="primary" size="sm" class="mb-2">Biến động</UiText>
          <UiText size="3xl">{{ useMoney().toMoney(receive.total - spend.total) }}</UiText>
        </UiFlex>
      </UCard>
    </div>
  </div>

  <StaffWorkshiftHistory></StaffWorkshiftHistory>
</template>

<script setup>
const { $API } = useNuxtApp()

const loading = ref(true)
const workshift = ref(undefined)
const receive = ref(undefined)
const spend = ref(undefined)

const getWorkShift =  async () => {
  try {
    loading.value = true

    const data = await useAPI($API.WorkShift.Staff.Auth)
    loading.value = false

    workshift.value = data.workshift
    receive.value = data.receive
    spend.value = data.spend
  }
  catch(e){
    loading.value = false
  }
}

getWorkShift()
</script>