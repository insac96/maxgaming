
<template>
  <div>
    <UiFlex>
      <USelectMenu v-model="page.size" :options="[5,10,20,50,100]" class="mr-auto"/>
      <UButton color="gray" @click="modal.add = true">Thêm nhân viên</UButton>
    </UiFlex>

    <UCard :ui="{ body: { padding: 'p-0 sm:p-0' }}" class="my-4">
      <UTable v-model:sort="page.sort" :columns="columns" :rows="list">
        <template #[`profile.name-data`]="{ row }">
          {{ row.profile.name || '...' }}
        </template>

        <template #[`profile.email-data`]="{ row }">
          {{ row.profile.email || '...' }}
        </template>

        <template #[`profile.phone-data`]="{ row }">
          {{ row.profile.phone || '...' }}
        </template>

        <template #[`profile.address-data`]="{ row }">
          {{ row.profile.address || '...' }}
        </template>

        <template #createdAt-data="{ row }">
          {{ useDayJs().displayFull(row.createdAt) }}
        </template>
      </UTable>
    </UCard>

    <UiFlex justify="end">
      <UPagination v-model="page.current" :page-count="page.size" :total="page.total" />
    </UiFlex>

    <UModal v-model="modal.add" preventClose>
      <UForm :state="stateAdd" @submit="addAction" class="p-4">
        <UFormGroup label="Tài khoản">
          <UInput v-model="stateAdd.auth.username" />
        </UFormGroup>

        <UFormGroup label="Mật khẩu">
          <UInput v-model="stateAdd.auth.password" />
        </UFormGroup>

        <UFormGroup label="Tên thật">
          <UInput v-model="stateAdd.profile.name" />
        </UFormGroup>

        <UFormGroup label="Hòm thư">
          <UInput v-model="stateAdd.profile.email" />
        </UFormGroup>

        <UFormGroup label="Điện thoại">
          <UInput v-model="stateAdd.profile.phone" />
        </UFormGroup>

        <UFormGroup label="Địa chỉ">
          <UInput v-model="stateAdd.profile.address" />
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

const columns = [{
  key: 'auth.username',
  label: 'Tài khoản',
},{
  key: 'profile.name',
  label: 'Tên thật',
},{
  key: 'profile.email',
  label: 'Hòm thư',
},{
  key: 'profile.phone',
  label: 'Số điện thoại',
},{
  key: 'profile.address',
  label: 'Địa chỉ',
},{
  key: 'createdAt',
  label: 'Ngày tạo',
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
  auth: {
    username: null,
    password: null
  },
  profile: {
    name: null,
    email: null,
    phone: null,
    address: null
  }
})

const modal = ref({
  add: false
})

const loading = ref({
  table: false,
  add: false
})

watch(() => modal.value.add, (val) => !val && (stateAdd.value = {
  auth: {
    username: null,
    password: null
  },
  profile: {
    name: null,
    email: null,
    phone: null,
    address: null
  }
}))

const getList = async () => {
  try {
    loading.value.table = true
    const data = await useAPI($API.User.Admin.ListStaff, { ...page.value })

    loading.value.table = false
    list.value = data.list
    page.value.total = data.total
  }
  catch(e){
    loading.value.table = false
  }
}

const addAction = async () => {
  try {
    loading.value.add = true
    await useAPI($API.User.Admin.AddStaff, JSON.parse(JSON.stringify(stateAdd.value)))

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