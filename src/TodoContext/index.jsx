import { createContext } from "react";
import { useLocalStorage } from "./useLocalSorage";
const TodoContext = createContext()

function TaskProvider(props) {
    const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])
    const listTodo = true
    console.log(listTodo)
    console.log(todos)
    
    const totalTodos = todos.length
    const completedTodos = 0

    const addTask = (taskList) => {
        const newTask = [...todos, taskList]
        saveTodos(newTask)
    }

    
    return (
        <TodoContext.Provider value={{
            todos,
            saveTodos,
            addTask,
            totalTodos,
            completedTodos,
            listTodo
        }}
        >
            {props.children}
        </TodoContext.Provider>
    );
}

export {TaskProvider, TodoContext};