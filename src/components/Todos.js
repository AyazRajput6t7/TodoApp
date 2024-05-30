import React from 'react'
import TodoItem from './TodoItem'   
const Todos = ({todos,onDelete,onMarkCompleted}) => {
  return (
    <ul className='space-y-3'>
       {todos?.map((todo) =>(
         <TodoItem key={todo.id} {...todo} onMarkCompleted={onMarkCompleted} onDelete={onDelete}/>
       ))
       }
      
     
     
    </ul>
  )
}

export default Todos
