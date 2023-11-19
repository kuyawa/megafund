import { NextRequest } from 'next/server'
import { put } from '@vercel/blob'

type Dictionary = { [key:string]:any }

export async function POST(request: NextRequest) {
  try {
    const form = await request.formData()
    //console.log('FORM', form)
    // TODO: create contract, get contract address
    const contract = '0x...'
    let rec:Dictionary = {contract}
    let file:File = new File([], 'test.txt')
    form.forEach((val, key) => {
      console.log('-', key, val)
      if(key=='image') { 
        file = val as File
        rec[key] = file?.name || ''
      } else { 
        rec[key] = val
      }
    })
    console.log('REC:', rec)
    console.log('FILE', file)
    // upload file
    const filename = file?.name || 'noname.jpg'
    console.log('Uploading', filename)
    const blob = await put(filename, file, { access: 'public' }) // https://2x1swtt81k3wqss3.public.blob.vercel-storage.com/test-fkv5wkTb6HKJi7ZinyTJKrXDQhA5Kl.jpg
    console.log('BLOB', blob)
    // TODO: save data to db
    const data = { success: true, blob }
    return Response.json(data)    
  } catch(ex:any) {
    console.error(ex)
    return Response.json({ success: false, error:ex?.message })
  }  
}

export async function PUT(request: NextRequest) {
  const form = await request.formData()
  console.log('FORM', form)
  // SAVE
  const data = { success: false, error:'Nothing to see here' }
  return Response.json(data)
}


/*
{
  url: 'https://2x1swtt81k3wqss3.public.blob.vercel-storage.com/test-fkv5wkTb6HKJi7ZinyTJKrXDQhA5Kl.jpg',
  pathname: 'test.jpg',
  contentType: 'image/jpeg',
  contentDisposition: 'attachment; filename="test.jpg"'
}
*/