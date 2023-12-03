export default defineEventHandler(async (event) => {
  try {

  }
  catch(e:any){
    return res(event, { code: 400, message: e.toString() })
  }
})