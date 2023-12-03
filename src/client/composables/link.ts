export const useMakeLink = () => {
  const runtimeConfig = useRuntimeConfig()

  function imgLink(link : string) : string {
    const url =  new URL(link || '/images/none.webp', runtimeConfig.public.CLIENT_URL)
    return url.href
  }

  function link(link : string) : string {
    const url =  new URL(link, runtimeConfig.public.CLIENT_URL)
    return url.href
  }

  return { imgLink, link }
}