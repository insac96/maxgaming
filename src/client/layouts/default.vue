<template>
  <div class="relative bg-slate-50 dark:bg-gray-900 min-h-screen">
    <LayoutDefaultHeader />

    <UContainer class="grid grid-cols-12 gap-0 min-h-[calc(100vh-var(--header-size))]">
      <main class="py-4 col-span-12">
        <slot></slot>
      </main>
    </UContainer>
  </div>
</template>