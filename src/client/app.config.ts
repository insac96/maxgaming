export default defineAppConfig({
  ui: {
    primary: 'emerald',
    gray: 'cool',

    icons: {
      dynamic: true
    },

    formGroup: {
      wrapper: 'mb-4',
      container: 'mt-2'
    },

    input: {
      default: {
        size: 'lg',
        loadingIcon: 'i-bx-loader-alt'
      }
    },

    notifications: {
      position: 'right-0 top-0 bottom-auto',
    },
  }
})