"use client"
import { useState, FormEvent } from 'react'
import Page from '@/components/page'
import InputArea from '@/components/input-area'
import InputText from '@/components/input-text'
import styles from '@/app/page.module.css'

export default function Start() {
  const [message, setMessage] = useState('Enter your dream info and submit it')

  async function submit(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    console.log('FORM SUBMIT')
    setMessage('Saving dream info, wait...')
    try {
      const formData = new FormData(event.currentTarget)
      //for(let key of formData.keys()){
      //  console.log('KEY', key, formData.get(key))
      //}
      const resp = await fetch('/api/dream', {
        method: 'POST',
        body: formData,
      })
      const info = await resp.json()
      console.log('INFO', info)
      if (!info.success || info.error) {
        setMessage('Failed to submit the data. Please try again.')
        return
      }
      setMessage('Thank you for starting your dream!')
    } catch (ex:any) {
      console.error(ex)
      setMessage(ex?.message)
    }
  }

  return (
    <Page>
      <h1 className={styles.title}>START YOUR DREAM</h1>
      <form onSubmit={submit}>
        <h2>Tell us more about yourself and your ideas...</h2>
        <input type="hidden" name="owner" value="0x1234567890" />
        <InputText name="name" label="Your name" info="" />
        <InputText name="mail" label="Your email" info="" />
        <InputText name="country" label="Your country" info="" />
        <InputText name="goal" label="Funding goal in USD" info="Amount of money you need to start your dream" />
        <InputText name="title" label="Dream Title" info="One line as the title" />
        <InputArea name="desc" label="Describe your dream" info="Expand on your ideas and goals, how you will invest the money (some markup allowed)" />
        <label>Upload an image for your dream</label>
        <img src="/api/image?url=https://2x1swtt81k3wqss3.public.blob.vercel-storage.com/test-fkv5wkTb6HKJi7ZinyTJKrXDQhA5Kl.jpg" alt="" width={650} height={320} />
        <input type="file" name="image" />
        <button className={styles.submit} type="submit">SUBMIT</button>
        <div className={styles.message}>{message}</div>
      </form>
    </Page>
  )
}
