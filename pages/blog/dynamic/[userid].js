import { useRouter } from "next/router";

import React from 'react'

const user = () => {
    const router = useRouter()
    const id = router.query.id
  return (
    <div>You are in Route {id}</div>
  )
}

export default user