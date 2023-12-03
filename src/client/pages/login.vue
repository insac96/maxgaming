<template>
  <UCard class="w-[450px]">
    <template #header>
      <UiText size="base" weight="semibold">Max Gaming</UiText>
      <UiText size="sm" color="gray">Đăng nhập để bắt đầu ca làm việc</UiText>
    </template>
    
    <UForm :state="state" :validate="validate" @submit="onLogin">
      <UFormGroup label="Tài khoản" name="username">
        <UInput icon="i-bxs-user" type="text" v-model="state.username" :disabled="!!loading" />
      </UFormGroup>

      <UFormGroup label="Mật khẩu" name="password">
        <UInput icon="i-bxs-lock" type="password" v-model="state.password" :disabled="!!loading" />
      </UFormGroup>

      <UiFlex justify="end" class="mt-4">
        <UButton type="submit" :loading="loading">Bắt Đầu</UButton>
      </UiFlex>
    </UForm>
  </UCard>
</template>

<script setup>
definePageMeta({
  layout: 'login'
})

const { $API } = useNuxtApp()

const state = ref({
  username: null,
  password: null
})

const loading = ref(false)

const validate = (state) => {
  const errors = []
  if (!state.username) errors.push({ path: 'username', message: 'Vui lòng nhập đầy đủ' })
  if (!state.password) errors.push({ path: 'password', message: 'Vui lòng nhập đầy đủ' })
  return errors
}

const onLogin = async () => {
  try {
    loading.value = true
    await useAPI($API.Auth.Login, JSON.parse(JSON.stringify(state.value)))
    
    loading.value = false
    navigateTo('/')
  }
  catch (e) {
    loading.value = false
  }
}
</script>