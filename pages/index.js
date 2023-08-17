// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// // import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'


export default function Home() {
  return(
    <div>
      <Link href='/blog/nest/id' >
        blog
      </Link>
      <div>
        <Link href={'/blog/nest/1'} >Nest 1</Link>
        <Link href={'/blog/nest/2'} >Nest 2</Link>
        <Link href={'/blog/nest/3'} >Nest 3</Link>
      </div>
    </div>
  )
}
