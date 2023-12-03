<template>
  <div v-if="!loading">
    <UiFlex class="mb-4">
      <UInput icon="i-bx-user" :model-value="profile.username" readonly class="mr-1"></UInput>
      <UInput icon="i-bx-time" :model-value="useDayJs().displayFull(workshift.start)" readonly></UInput>

      <UButton color="red" class="ml-auto" @click="logout">Thoát Ca</UButton>
    </UiFlex>

    <UCard>
      <div class="grid grid-cols-12 gap-4">
        <UiFlex type="col" class="md:col-span-4 col-span-6">
          <UiText weight="semibold" color="primary">Thu</UiText>
          <UiText size="3xl">{{ useMoney().toMoney(receive.total) }}</UiText>
        </UiFlex>

        <UiFlex type="col" class="md:col-span-4 col-span-6">
          <UiText weight="semibold" color="primary">Chi</UiText>
          <UiText size="3xl">{{ useMoney().toMoney(spend.total) }}</UiText>
        </UiFlex>

        <UiFlex type="col" class="md:col-span-4 col-span-12">
          <UiText weight="semibold" color="primary">Biến động</UiText>
          <UiText size="3xl">{{ useMoney().toMoney(receive.total - spend.total) }}</UiText>
        </UiFlex>
      </div>
    </UCard>
  </div>
</template>

<script setup>
const { $API } = useNuxtApp()
const { profile } = useAuthStore()

const loading = ref(true)
const workshift = ref(undefined)
const receive = ref(undefined)
const spend = ref(undefined)

const logout = async () => {
  try {
    await userAPI($API.Auth.Logout)
  }
  catch(e) {
    return true
  }
}

const getWorkShift =  async () => {
  try {
    loading.value = true

    const data = await useAPI($API.WorkShift.Auth)
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