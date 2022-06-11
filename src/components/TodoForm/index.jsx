import React, {useState} from 'react'
import { TodoContext } from '../TodoContext'

import './todoForm.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = useState('')

    const {addTodo, setOpenModal} = React.useContext(TodoContext)

    const onChanges = (e) => {
        setNewTodoValue(e.target.value)
        console.log(newTodoValue)
    }
    const onCancelar = () =>{
        setOpenModal(false)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

  return (
    <form onSubmit={onSubmit} className='todoFrom'>
        <label htmlFor="todo">Crear un todo</label>
        <textarea 
            value={newTodoValue}
            onChange={onChanges}
            cols="30" rows="30"
            id="todo"
        />
        <div className="todoFrom__button--container">
            <button
                onClick={onCancelar}
                type='button'
                className='button btn-secondary'
            >Cancelar</button>
            <button
                type='submit'
                className='button btn-primary'
            >Aceptar</button>
        </div>

    </form>
  )
}

export default TodoForm