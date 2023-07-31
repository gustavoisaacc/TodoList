import { useContext } from 'react';
import './taskList.css'
import { TodoContext } from '../../TodoContext';
/* eslint-disable react/prop-types */
export function TaskList({children}) {
    const {totalTodos, completedTodos,serch, setSerch} = useContext(TodoContext)
    return (
        <div className="taskList">
            <h1>{completedTodos} todo Completado de {totalTodos}</h1>
            <input value={serch} onChange={(e) => setSerch(e.target.value)} className='inputSearch' type="text" name="" id="" />
            <ul>
                {children}
            </ul>
        </div>
    );
}



export const Welcome = () => {return (<div className='add-task'><h2>Ingrese una tarea</h2></div>)}
