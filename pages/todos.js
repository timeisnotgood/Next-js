import React from 'react'

const todos = ({todos}) => {
    console.log(todos);
  return (
    <div>List of todos
    {todos.map( todo =>{
        return(
            <div key={todo.id} >
                <p>{todo.title}</p>
            </div>
        )
    } )}
    </div>
  )
}

export default todos

export async function getStaticProps(){
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    const res = await data.json()
    return{
        props:{
            todos : res 
        },
    }
}