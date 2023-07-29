import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalSorage";
const TodoContext = createContext()

function TaskProvider(props) {
    const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
    const [serch, setSerch] = useState('');
    const listTodo = todos.length !== 0;
    
    const totalTodos = todos.length;
    const completedTodos = todos.filter(item => item.complete).length;

    const addTask = (taskList) => {
        const newTask = [...todos, taskList]
        saveTodos(newTask)
    }

    const completeItem = (text) => {
        const newTodo = [...todos]
        const todoIndex = newTodo.findIndex(todo => todo.title === text)
        newTodo[todoIndex].complete = true
        saveTodos(newTodo)
    }

    const deleteItem = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(todo => todo.text === text)
        newTodos[todoIndex] = newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }

    const serchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const serchText = serch.toLowerCase();
        return todoText.includes(serchText)
    })
    
    return (
        <TodoContext.Provider value={{
            todos,
            saveTodos,
            addTask,
            totalTodos,
            completedTodos,
            listTodo,
            deleteItem,
            completeItem,
            serch,
            setSerch,
            serchedTodos
        }}
        >
            {props.children}
        </TodoContext.Provider>
    );
}

export {TaskProvider, TodoContext};