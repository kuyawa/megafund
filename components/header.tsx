'use client'
import Link from 'next/link'
import styles from '@/app/page.module.css'

export default function Header() {
  return (
    <header>
      <Link href='/'><span className={styles.appname}>Dreamers.fund</span></Link>
      <div className={styles.login}>Login with your crypto wallet</div>
    </header>
  )
}