export default defineNuxtRouteMiddleware(async () => {
  try {
    const { $API } = useNuxtApp()
    const { setAuth } = useAuthStore()
    
    const token = useCookie('token-staff')
    if(!token.value) throw true

    const authStore = await useAPI($API.Auth.Staff.Get)
    return setAuth(authStore)
  }
  catch (e:any) {
    return navigateTo('/login')
  }
})