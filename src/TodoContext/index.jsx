import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalSorage";
const TodoContext = createContext()

function TaskProvider(props) {
    const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
    const [serch, setSerch] = useState('');
    // const [edit, setEdit] = useState(null);
    const listTodo = todos.length !== 0;
    
    const totalTodos = todos.length;
    const completedTodos = todos.filter(item => item.complete).length;

    const addTask = (taskList) => {
        const newTask = [...todos, taskList];
        saveTodos(newTask);
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

    // const editTodo = (text) => {
    //     const newTodos = [...todos]
    //     const editText = newTodos.find(todo => todo.title === text )
    //     setEdit(editText)
    // }

    // const updateTodos = (title, complete) => {
    //     const newTodo = todos.map(todo => 
    //         todo.title === title ? {title, complete} : todos
    //     )
    //     saveTodos(newTodo)
    // } 

    const serchedTodos = todos.filter(todo => {
        const todoText = todo.title.toLowerCase();
        const serchText = serch.toLowerCase();
        return todoText.includes(serchText);
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
            serchedTodos,
            // editTodo,
            // edit,
            // setEdit,
            // updateTodos
            
        }}
        >
            {props.children}
        </TodoContext.Provider>
    );
}

export {TaskProvider, TodoContext};