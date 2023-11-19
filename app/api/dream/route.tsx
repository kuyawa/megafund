import { NextRequest } from 'next/server'
import { put } from '@vercel/blob'

export async function POST(request: NextRequest) {
  try {
    const form = await request.formData()
    //console.log('FORM', form)
    // TODO: create contract, get contract address
    const contract = '0x...'
    let rec = {contract}
    let file = null
    //const keys = form.keys()
    //console.log('KEYS', keys)
    //Object.entries(form.keys()).forEach(([key, val]) => {
    form.forEach((key, val) => {
      console.log(key, val)
    })
    // error
    // for (let [key, value] of form.entries()) {
    //  console.log(`${key}: ${value}`);
    // }
    // error
    // for(let key of form.keys()){
    //  const val = form.get(key)
    //  if(key=='image') { 
    //    file = val
    //    rec[key] = val.name
    //  }
    //  else { rec[key] = val }
    // }
    //console.log('REC', rec)
    //console.log('FILE', file)
    //// upload file
    //const filename = file?.name || 'noname.jpg'
    //console.log('Uploading', filename)
    //const blob = await put(filename, file, { access: 'public' })
    const blob = null
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
