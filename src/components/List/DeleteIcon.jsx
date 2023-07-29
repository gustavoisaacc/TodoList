import { AiFillDelete } from "react-icons/ai";

import { useContext } from 'react'; 
import {TodoContext} from '../../TodoContext'

import './list.css'

function DeleteIcon({todos}) {
  const {deleteItem} = useContext(TodoContext)
    return (
        <div onClick={() => deleteItem(todos.title)}>
            <AiFillDelete className='icon icon--delete'/>
        </div>
    );
}

export default DeleteIcon;