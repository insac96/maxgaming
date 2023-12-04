<template>
  <div class="relative bg-slate-50 dark:bg-gray-900 min-h-screen">
    <AdminLayoutHeader/>

    <div class="grid grid-cols-12 gap-0 min-h-[calc(100vh-var(--header-size))]">
      <div class="
        xl:col-span-1
        xl:block hidden
        xl:sticky xl:top-[var(--header-size)]
        xl:max-h-[calc(100vh-var(--header-size))] xl:overflow-y-auto
        border-r border-gray-200 dark:border-gray-800
        p-2
      ">
        <AdminLayoutNav />
      </div>
      
      <div class="xl:col-span-11 col-span-12">
        <main class="p-4">
          <slot></slot>
        </main>
      </div>
    </div>
  </div>
</template>