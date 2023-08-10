import React from 'react'
import { useRouter } from 'next/router'

const doc = () => {
    const router = useRouter()
    const {params} = router.query
    console.log(params);
  return (
    <div>Hellow this is doc</div>
  )
}

export default doc