
<template>
  <div>
    <UCard :ui="{ 
      body: { padding: 'p-0 sm:p-0' },
      header: { padding: 'p-3 sm:p-3' },
      footer: { padding: 'p-3 sm:p-3' },
    }">
      <template #header>
        <UiFlex>
          <UiText weight="semibold" size="sm" class="mr-auto">Lịch sử ca làm</UiText>
          <USelectMenu v-model="page.size" :options="[5,10,20,50,100]" />
        </UiFlex>
      </template>

      <UTable v-model:sort="page.sort" :columns="columns" :rows="list">
        <template #start-data="{ row }">
          {{ useDayJs().displayFull(row.start) }}
        </template>

        <template #end-data="{ row }">
          {{ useDayJs().displayFull(row.end) }}
        </template>

        <template #receive-data="{ row }">
          <UiText weight="semibold">{{ useMoney().toMoney(row.receive) }}</UiText>
        </template>

        <template #spend-data="{ row }">
          <UiText weight="semibold">{{ useMoney().toMoney(row.spend) }}</UiText>
        </template>
      </UTable>

      <template #footer>
        <UiFlex justify="end">
          <UPagination v-model="page.current" :page-count="page.size" :total="page.total" />
        </UiFlex>
      </template>
    </UCard>
  </div>
</template>

<script setup>
const { $API } = useNuxtApp()

const list = ref([])

const columns = [{
  key: 'start',
  label: 'Bắt đầu',
  sortable: true
},{
  key: 'end',
  label: 'Kết thúc',
  sortable: true
},{
  key: 'receive',
  label: 'Tổng nhận',
  sortable: true
},{
  key: 'spend',
  label: 'Tổng chi',
  sortable: true
}]

const page = ref({
  size: 10,
  current: 1,
  total: 0,
  sort: {
    column: 'end',
    direction: 'desc'
  }
})
watch(() => page.value.size, () => getWorkShiftHistory())
watch(() => page.value.current, () => getWorkShiftHistory())
watch(() => page.value.sort.column, () => getWorkShiftHistory())
watch(() => page.value.sort.direction, () => getWorkShiftHistory())

const loading = ref({
  table: false,
})

const getWorkShiftHistory = async () => {
  try {
    loading.value.table = true

    const data = await useAPI($API.WorkShift.AuthHistory, { ...page.value })
    loading.value.table = false

    list.value = data.list
    page.value.total = data.total
  }
  catch(e){
    console.log(e)
    loading.value.table = false
  }
}

getWorkShiftHistory()
</script>