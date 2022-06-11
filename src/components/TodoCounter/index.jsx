import React from 'react';

import { TodoContext } from '../TodoContext';
import './todoCounter.css';

function TodoCounter() {
  const {todoComplet, todoCount} = React.useContext(TodoContext)
  return (
    <h1 className='title'>Tareas realizadas <span className='wite'>{todoComplet}</span> de <span className='wite'>{todoCount}</span></h1>
  )
}

export default TodoCounter