import React from 'react'
import ReactDOM from 'react-dom'

import './modal.css'

function Modal(props) {
  return ReactDOM.createPortal(
      <div className="modalBackground">
          {props.children}
      </div>,
      document.getElementById('modal')
  )
}

export default Modal