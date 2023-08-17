import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const nest = () => {
    const router = useRouter()
    const id = router.query.id
  return (
    <div>
        Dynamic Routing
        {id}
        <Link href={'/'} >Home</Link>
    </div>
  )
}

export default nest