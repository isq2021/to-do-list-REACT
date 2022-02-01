import React, { useState, useEffect, useRef } from 'react';


  

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);
    
  return 
  <form  className='todo-form'>
      
        <>
          <input
            placeholder='Update your item'
            value='smth'
            
            name='text'
            
            className='todo-input edit'
          />
          <button  className='todo-button edit'>
            Update
          </button>
        </>
      
       
    </form>
}

export default TodoForm;
