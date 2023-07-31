import { useContext, useState } from 'react';
import { TodoContext } from '../../TodoContext'; 

import './formTask.css'


function FromCreateTask() {
    const {addTask} = useContext(TodoContext)
    const [task,setTask] = useState('')

    const taskList = {
        title: task,
        complete: false
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        if(task === '' || task.length < 3){
            alert('ingrese una tarea valida')
        }else{
            addTask(taskList)
            setTask('')
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input onChange={e => setTask(e.target.value)} value={task} className='inputTask' placeholder='Task' type="text" required />
            <button className='btnTask'>Crear</button>
        </form>
    );
}

export {FromCreateTask};