import Comp from '@/components/Comp'
import React from 'react'

const user = ({user}) => {
  return (
    <>
        {user.map( user =>{
            return(
                <div key={user.id} >
                <Comp user = {user} />
                </div>
            )
         } )}
    </>
  )
}

export default user

export async function getStaticProps(){
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const res = await data.json()
    return{
        props:{
            user : res
        },
    }
}