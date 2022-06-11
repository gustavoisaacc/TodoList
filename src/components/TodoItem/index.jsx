import React from 'react'
import './todoItem.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashCan, faPenToSquare} from '@fortawesome/free-solid-svg-icons'
function TodoItem({name, completed,completedTodo,deleteTodo}) {
  return (
    <div>
        <div className="todo__campo">
          <a href='#' className={`todo--edit ${completed && 'completado'}`}
            onClick={ ()=> completedTodo()}
          >
            <FontAwesomeIcon icon={faPenToSquare}/>
          </a>
          <p className={`todo--title ${completed && ' completado--title'}`}>{name}</p>
          <a href='#' className='todo--delete' onClick={()=> deleteTodo()}>
            <FontAwesomeIcon icon={faTrashCan}/>
          </a>
        </div>
    </div>
  )
}

export default TodoItem