import React, { useReducer } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


const index = () => {
    const router = useRouter()
    const id = router.query.productid
  return (
    <div>
        <h1> Product id is {id} </h1>
    </div>
  )
}

export default index