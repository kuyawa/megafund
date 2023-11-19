import { put } from '@vercel/blob'

export default async function Upload(file:any, name:string) {
  try {
    const filename = name || 'noname.jpg'
    console.log('Uploading', filename)
    const blob = await put(filename, file, { access: 'public' })
    return {success:true, blob}
  } catch(ex:any) {
    console.error(ex)
    return {success:false, error:ex?.message}
  }
}