import React from 'react'
import { useRouter } from 'next/router'

const doc = () => {
    const router = useRouter()
    const { params =[] } = router.query 

    if(params.length === 2){
      return <h3>Viewing in Feature {params[0]} followed by {params[1]} </h3>
    }else if( params.length ===1 ){
      return <h3>Viewing in Feature {params[0]}</h3>
    }else{
      return (
        <div>Hellow this is doc</div>
      )
    }
  
}

export default doc