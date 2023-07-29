import { AiFillCheckCircle } from "react-icons/ai";


import { useContext } from 'react';
import {TodoContext} from '../../TodoContext'

import './list.css'

function Check() {
  const {completeItem, todos} = useContext(TodoContext)
  return (
    <div onClick={() => completeItem(todos.title)}>
      <AiFillCheckCircle  className={`icon icon--check ${todos.complete ? 'icon--check' : ''}`}/>
    </div>
  );
}

export default Check;