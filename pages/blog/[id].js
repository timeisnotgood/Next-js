import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const first = () => {
  const router = useRouter()
  const id = router.query.id
  return (
    <div>
    <p>Dynamic Routing Page</p>
      {id}
      <Link href={'/'} >Home</Link>
    </div>
  )
}

export default first