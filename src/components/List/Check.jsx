import { AiFillCheckCircle } from "react-icons/ai";


import { useContext } from 'react';
import {TodoContext} from '../../TodoContext'

import './list.css'

function Check({todo}) {
  const {completeItem} = useContext(TodoContext)

  return (
    <div onClick={() => completeItem(todo.title)}>
      <AiFillCheckCircle  className={`icon icon--check ${todo.complete ? 'checked' : ''}`}/>
    </div>
  );
}

export default Check;