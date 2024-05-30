import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { useState } from 'react'
const App = () => {
  const [todos , setTodos] =useState([])
  
  const onMarkCompleted = (id,completed) => () =>{
    setTodos(todos?.map((todo) =>{
      if(todo.id === id){
        todo.completed =!completed
      }
      return todo
    }))
}
const onDelete = (id) => () =>{
    setTodos(todos?.filter((todo) => todo.id !== id))
  }

  const onAdd = (title) =>{
    const newTodo = {
      userid : todos?.length + 1,
      id: todos?.length + 1,
      title ,
      completed: false,
    }
    setTodos([newTodo , ...todos ])
  }

  return (
    <div className='max-w-2xl mx-auto mt-3'>
     <h1 className='text-3xl font-bold flex justify-center text-gray-800'> Todo App</h1>
     <AddTodo onAdd={onAdd} />
     <Todos todos={todos} onMarkCompleted={onMarkCompleted} onDelete={onDelete}/>
    </div>
  )
}

export default App
