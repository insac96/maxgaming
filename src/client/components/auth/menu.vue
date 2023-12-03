<template>
  <UiFlex>
    <UButton icon="i-bxs-user" color="gray" class="mr-1">
      {{ profile.username.toUpperCase() }}
    </UButton>

    <UButton color="red" @click="modal = true">Thoát</UButton>

    <UModal v-model="modal" prevent-close>
      <UCard :ui="{
        header: { padding: 'py-2 sm:py-2 px-3 sm:px-3', base: 'bg-red-500 dark:bg-red-400'},
        body: { padding: 'px-3 sm:px-3'}
      }">
        <template #header>Đăng xuất</template>
        <UiText>Xác nhận thoát ca làm việc ?</UiText>
        <UiFlex justify="end" class="mt-4">
          <UButton color="red" class="mr-1" :loading="!!loading" @click="logout">Đồng Ý</UButton>
          <UButton color="gray" :disabled="!!loading" @click="modal = false">Không</UButton>
        </UiFlex>
      </UCard>
    </UModal>
  </UiFlex>
</template>

<script setup>
const { $API } = useNuxtApp()
const { profile } = useAuthStore()

const modal = ref(false)
const loading = ref(false)

const logout = async () => {
  try {
    loading.value = true
    await useAPI($API.Auth.Logout)

    navigateTo('/login')
    loading.value = false
  }
  catch (e) {
    loading.value = false
  }
}
</script>