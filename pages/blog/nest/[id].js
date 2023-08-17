import React from 'react'
import { useRouter } from 'next/router'

const nest = () => {
    const router = useRouter()
    const id = router.query.id
  return (
    <div>
        Dynamic Routing
        {id}
    </div>
  )
}

export default nest