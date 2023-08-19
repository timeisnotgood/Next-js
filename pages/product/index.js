import Link from 'next/link'
import React from 'react'

const index = ({ productid = 100 }) => {
  return (
    <div>
        <Link href={'/product/1'} >Product 1</Link>
        <Link href={`/product/${productid}`} >Product 100</Link>
        <Link href={'/product/3'} >Product 3</Link>
    </div>
  )
}

export default index