export default defineNuxtPlugin(() => {
  const API = {
    Auth: {
      Get: 'auth/get',
      Login: 'auth/login',
      Logout: 'auth/logout',
    },

    Receive: {
      GetOnWorkShift: 'receive/getOnWorkShift',
      Add: 'receive/add'
    },

    Spend: {
      GetOnWorkShift: 'spend/getOnWorkShift',
      Add: 'spend/add'
    },

    WorkShift: {
      Auth: 'workshift/auth'
    }
  }

  return {
    provide: {
      API: API
    }
  }
})