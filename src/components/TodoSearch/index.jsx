import React from 'react'

import { TodoContext } from '../TodoContext'
import './todoSerch.css'

function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext)
  return (
    <div>
       <div className="form__container">
       <input 
        className='input'type="text" placeholder='ingrese un tarea'
        value={searchValue}
        onChange={(e)=> setSearchValue(e.target.value)}
       />
       </div>
    </div>
  )
}

export default TodoSearch