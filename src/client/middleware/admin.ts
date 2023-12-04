export default defineNuxtRouteMiddleware(async () => {
  try {
    const { $API } = useNuxtApp()
    const { setAdminAuth } = useAuthStore()

    const token = useCookie('token-admin')
    if(!token.value) throw true

    await useAPI($API.Auth.Admin.Get)
    return setAdminAuth(true)
  }
  catch (e:any) {
    return navigateTo('/login/admin')
  }
})