import React from 'react'
import { useRouter } from 'next/router'

const first = () => {
  const router = useRouter()
  const id = router.query.id
  return (
    <div>
    <p>Dynamic Routing Page</p>
      {id}
    </div>
  )
}

export default first