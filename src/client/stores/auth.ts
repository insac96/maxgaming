import { defineStore } from 'pinia'
import type { IDBAuthStore } from '~~/types/model/user'

export const useAuthStore = defineStore('auth', () => {
  const isLogin = ref(false)
  const isAdminLogin = ref(false)
  const profile : Ref<IDBAuthStore['profile']> = ref({})
  const workshift : Ref<IDBAuthStore['workshift']> = ref({})

  function setAuth (data : IDBAuthStore | null) {
    if(!!data){
      isLogin.value = true
      profile.value = (data as IDBAuthStore).profile
      workshift.value = (data as IDBAuthStore).workshift
    }
    else {
      isLogin.value = false
      profile.value = {}
    }
  }

  function setAdminAuth (data : boolean) {
    isAdminLogin.value = data
  }

  return { 
    isLogin, profile, setAuth,
    isAdminLogin, setAdminAuth
  }
})