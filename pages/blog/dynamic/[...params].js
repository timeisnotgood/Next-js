import { useRouter } from "next/router";

import React from 'react'

const Catchall = () => {
    const router = useRouter()
    const {params = []} = router.query
  return (
    <div>{params[0]}</div>
  )
}

export default Catchall