// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// // import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'
import { useRouter } from 'next/router';


export default function Home() {

  const router = useRouter()
  const handler = () =>{
    console.log(" Your Order is placing");
    router.push('/product/id')
  }
  return(
    <div>
      <Link href={'/blog'} > blog </Link>
      <Link href={'/doc'} >doc</Link>
      <Link href={'/product'} >product</Link>
      <button onClick={handler} >Place order</button>
    </div>
  )
}
