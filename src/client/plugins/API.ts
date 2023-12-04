export default defineNuxtPlugin(() => {
  const API = {
    Auth: {
      Staff: {
        Get: 'auth/staff/get',
        Login: 'auth/staff/login',
        Logout: 'auth/staff/logout',
      },

      Admin: {
        Get: 'auth/admin/get',
        Login: 'auth/admin/login',
        Logout: 'auth/admin/logout',
      }
    },

    Receive: {
      Staff: {
        GetOnWorkShift: 'receive/staff/getOnWorkShift',
        Add: 'receive/staff/add'
      }
    },

    Spend: {
      Staff: {
        GetOnWorkShift: 'spend/staff/getOnWorkShift',
        Add: 'spend/staff/add'
      }
    },

    WorkShift: {
      Staff: {
        Auth: 'workshift/staff/auth',
        AuthHistory: 'workshift/staff/authHistory'
      }
    }
  }

  return {
    provide: {
      API: API
    }
  }
})