
<template>
  <header class="
    sticky top-0 z-50 
    bg-white/75 dark:bg-transparent 
    backdrop-blur-xl
    border-b border-gray-200 dark:border-gray-800
  ">
    <UContainer class="flex justify-between items-center h-[var(--header-size)] max-h-[var(--header-size)]">
      <!-- Logo -->
      <UiFlex>
        <UiIcon name="bx-game" size="6" color="primary" class="mr-1"></UiIcon>
        <UiText weight="semibold" color="primary">Max</UiText>
        <UiText weight="semibold">Gaming</UiText>
      </UiFlex>

      <UiFlex>
        <StaffAuthMenu></StaffAuthMenu>
      </UiFlex>
    </UContainer>
  </header>
</template>