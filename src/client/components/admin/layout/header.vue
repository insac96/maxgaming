
import type { UiFlex } from '#build/components';

<template>
  <header class="
    sticky top-0 z-50 
    bg-white/75 dark:bg-transparent 
    backdrop-blur-xl
    border-b border-gray-200 dark:border-gray-800
    px-4
  ">
    <UiFlex class="h-[var(--header-size)] max-h-[var(--header-size)]">
      <!-- Menu -->
      <AdminLayoutMenu class="mr-4 xl:hidden"></AdminLayoutMenu>

      <!-- Logo -->
      <UiFlex class="mr-auto">
        <UiIcon name="bx-game" size="6" color="primary" class="mr-1"></UiIcon>
        <UiText weight="semibold" color="primary">Max</UiText>
        <UiText weight="semibold">Gaming</UiText>
      </UiFlex>

      <!-- Auth -->
      <UButton color="red" @click="logout">Thoát</UButton>
    </UiFlex>
  </header>
</template>

<script setup>
const { $API } = useNuxtApp()

const logout = async () => {
  try {
    await useAPI($API.Auth.Admin.Logout)
    navigateTo('/login/admin')
  }
  catch(e){
    return
  }
}
</script>