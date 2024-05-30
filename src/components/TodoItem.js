import React from 'react'

const TodoItem = ({title,id,completed,onMarkCompleted,onDelete}) => {
  
  return (
    <li 
    className='shadow-xl bg-white p-5 items-center flex justify-between'>
        <span className={completed? 'line-through' : ''}>
            <input className='mr-2' onChange={onMarkCompleted(id,completed)} checked={completed} type='checkbox' />
            {title}
        </span>
      <button onClick={onDelete(id)} className='bg-red-500 text-white p-2 rounded-full w-10 h-10'>X</button>
        </li>
  )
}

export default TodoItem
