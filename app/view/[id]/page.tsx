import Page from '@/components/page'
import styles from 'app/page.module.css'

export default function View(props:any) {
  const id = props?.params?.id || '0'
  console.log('PROPS', id)

  return (
    <Page>
      <h1 className={styles.title}>VIEW {id}</h1>
    </Page>
  )
}
