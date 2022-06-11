import React from 'react'
import'./todoList.css'

function TodoList(prop) {
  return (
    <div className='lista__todo'>
        {prop.children}
    </div>
  )
}

export default TodoList