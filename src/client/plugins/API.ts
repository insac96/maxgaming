export default defineNuxtPlugin(() => {
  const API = {
    'UploadImage': '/upload/image'
  }

  return {
    provide: {
      API: API
    }
  }
})