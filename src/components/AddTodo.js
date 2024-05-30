import React, { useState } from 'react'


const AddTodo = ({onAdd}) => {
    const [title , setTitle] = useState("");

    const onChange = (e) =>{
        const {value} =e.target;
        setTitle(value);
       }
    const onSubmit =(e) =>{
        e.preventDefault();
        onAdd(title)
        setTitle("")
    }


  return (
 

    <form className='flex text-base shadow-2xl p-5 mb-5' onSubmit={onSubmit}>
      <input
      value={title}
      onChange={onChange}
            className='flex-1 border  border-solid focus:outline-none pl-2 ' type="text" />
      <input className='bg-blue-500 text-white cursor-pointer p-4' type='submit' />'
    </form>
  )
}

export default AddTodo
