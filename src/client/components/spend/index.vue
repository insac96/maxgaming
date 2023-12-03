
<template>
  <div>
    <SpendStatistic :statistic="statistic" class="mb-4"></SpendStatistic>

    <UCard :ui="{ 
      body: { padding: 'p-0 sm:p-0' },
      header: { padding: 'p-2 sm:p-2' },
      footer: { padding: 'p-2 sm:p-2' },
    }">
      <template #header>
        <UiFlex>
          <USelectMenu v-model="page.size" :options="[5,10,20,50,100]" class="mr-auto"/>
          <UButton color="gray" @click="modal.add = true">Thêm khoản chi</UButton>
        </UiFlex>
        
      </template>

      <UTable v-model:sort="page.sort" :columns="columns" :rows="list">
        <template #currency-data="{ row }">
          {{ currencyType[row.currency] }}
        </template>

        <template #money-data="{ row }">
          <UiText weight="semibold">{{ useMoney().toMoney(row.money) }}</UiText>
        </template>

        <template #reason-data="{ row }">
          {{ row.reason || '...' }}
        </template>

        <template #createdAt-data="{ row }">
          {{ useDayJs().displayFull(row.createdAt) }}
        </template>
      </UTable>

      <template #footer>
        <UiFlex justify="end">
          <UPagination v-model="page.current" :page-count="page.size" :total="page.total" />
        </UiFlex>
      </template>
    </UCard>

    <UModal v-model="modal.add" preventClose>
      <UForm :state="stateAdd" @submit="addAction" class="p-4">
        <UFormGroup label="Nguồn tiền">
          <SelectCurrency v-model="stateAdd.currency" />
        </UFormGroup>

        <UFormGroup label="Số tiền">
          <UInput v-model="stateAdd.money" type="number" />
        </UFormGroup>

        <UFormGroup label="Lý do">
          <UTextarea v-model="stateAdd.reason" />
        </UFormGroup>

        <UiFlex justify="end" class="mt-4">
          <UButton type="submit" :loading="loading.add">Thêm</UButton>
          <UButton color="gray" @click="modal.add = false" :disabled="loading.add" class="ml-1">Đóng</UButton>
        </UiFlex>
      </UForm>
    </UModal>
  </div>
</template>

<script setup>
const { $API } = useNuxtApp()

const list = ref([])

const statistic = ref(undefined)

const columns = [{
  key: 'currency',
  label: 'Nguồn tiền',
},{
  key: 'money',
  label: 'Số tiền',
  sortable: true
},{
  key: 'reason',
  label: 'Lý do',
},{
  key: 'createdAt',
  label: 'Thời gian',
  sortable: true
}]

const page = ref({
  size: 10,
  current: 1,
  total: 0,
  sort: {
    column: 'createdAt',
    direction: 'desc'
  }
})
watch(() => page.value.size, () => getList())
watch(() => page.value.current, () => getList())
watch(() => page.value.sort.column, () => getList())
watch(() => page.value.sort.direction, () => getList())

const stateAdd = ref({
  currency: null,
  money: null,
  reason: null
})

const modal = ref({
  add: false
})

const loading = ref({
  table: false,
  add: false
})

watch(() => modal.value.add, (val) => !val && (stateAdd.value = {
  currency: null,
  money: null,
  reason: null
}))

const currencyType = {
  'BANKING': 'Chuyển khoản',
  'CASH': 'Tiền mặt'
}

const getList = async () => {
  try {
    loading.value.table = true
    const data = await useAPI($API.Spend.GetOnWorkShift, { ...page.value })

    loading.value.table = false
    list.value = data.list
    statistic.value = data.statistic
    page.value.total = data.total
  }
  catch(e){
    loading.value.table = false
  }
}

const addAction = async () => {
  try {
    loading.value.add = true
    await useAPI($API.Spend.Add, JSON.parse(JSON.stringify(stateAdd.value)))

    loading.value.add = false
    modal.value.add = false
    getList()
  }
  catch(e){
    loading.value.add = false
  }
}

getList()
</script>