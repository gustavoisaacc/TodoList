// import { useContext } from 'react';
import { FromCreateTask } from '../FromCreateTask';
import { ImageTask } from './ImageTask';

import './createTask.css'



function CreateTodo() {
    
    return (
        <section className="taskContainer">
            <h1>Todo-List</h1>
            <FromCreateTask />
            <ImageTask/>
        </section>
    );
}

export {CreateTodo};


        