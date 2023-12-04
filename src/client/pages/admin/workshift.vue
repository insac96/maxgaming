
<template>
  <div>
    <UiFlex>
      <USelectMenu v-model="page.size" :options="[5,10,20,50,100]" class="mr-auto"/>
    </UiFlex>

    <UCard :ui="{ body: { padding: 'p-0 sm:p-0' }}" class="my-4">
      <UTable v-model:sort="page.sort" :columns="columns" :rows="list">
        <template #user-data="{ row }">
          {{ row.user ? row.user.profile.name || row.user.auth.username : '...' }}
        </template>

        <template #start-data="{ row }">
          {{ row.start ? useDayJs().displayFull(row.start) : '...' }}
        </template>

        <template #end-data="{ row }">
          {{ row.end ? useDayJs().displayFull(row.end) : '...' }}
        </template>

        <template #receive-data="{ row }">
          {{ useMoney().toMoney(row.receive) }}
        </template>

        <template #spend-data="{ row }">
          {{ useMoney().toMoney(row.spend) }}
        </template>

        <template #flux-data="{ row }">
          {{ useMoney().toMoney(row.receive - row.spend) }}
        </template>
      </UTable>
    </UCard>

    <UiFlex justify="end">
      <UPagination v-model="page.current" :page-count="page.size" :total="page.total" />
    </UiFlex>
  </div>
</template>

<script setup>
const { $API } = useNuxtApp()

const list = ref([])

const columns = [{
  key: 'user',
  label: 'Nhân viên',
},{
  key: 'start',
  label: 'Bắt đầu',
  sortable: true
},{
  key: 'end',
  label: 'Kết thúc',
  sortable: true
},{
  key: 'receive',
  label: 'Khoản nhận',
  sortable: true
},{
  key: 'spend',
  label: 'Khoản chi',
  sortable: true
},{
  key: 'flux',
  label: 'Biến động',
  sortable: true
}]

const page = ref({
  size: 10,
  current: 1,
  total: 0,
  sort: {
    column: 'start',
    direction: 'desc'
  }
})
watch(() => page.value.size, () => getList())
watch(() => page.value.current, () => getList())
watch(() => page.value.sort.column, () => getList())
watch(() => page.value.sort.direction, () => getList())

const modal = ref({
})

const loading = ref({
  table: false
})

const getList = async () => {
  try {
    loading.value.table = true
    const data = await useAPI($API.WorkShift.Admin.List, { ...page.value })

    loading.value.table = false
    list.value = data.list
    page.value.total = data.total
  }
  catch(e){
    loading.value.table = false
  }
}

getList()
</script>