import { AiFillEdit } from "react-icons/ai";
import './list.css'
import { useContext } from "react";
import { TodoContext } from "../../TodoContext";


function Edit({todo}) {
    const {editTodo} = useContext(TodoContext)
    return (
        <div onClick={() => editTodo(todo.title)}>
           <AiFillEdit className="icon icon--edit"/>
        </div>
    );
}

export default Edit;
