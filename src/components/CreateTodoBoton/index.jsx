import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

import './createTodoBoton.css'

function CreateTodoBoton(props) {

  const onClickButton = () => {
    props.setOpenModal(prevSate => !prevSate)
  }

  return (
    <button onClick={onClickButton} className='btn'>
        <FontAwesomeIcon  icon={faPlus}/>
    </button>
  )
}

export default CreateTodoBoton