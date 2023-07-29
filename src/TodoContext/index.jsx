import { createContext } from "react";
import { useLocalStorage } from "./useLocalSorage";
const TodoContext = createContext()

function TaskProvider(props) {
    const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
    const listTodo = todos.length !== 0;
    
    const totalTodos = todos.length;
    const completedTodos = todos.filter(item => item.complete).length;

    const addTask = (taskList) => {
        const newTask = [...todos, taskList]
        saveTodos(newTask)
    }

    const completeItem = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(todo => todo.text === text)
        newTodos[todoIndex].complete = true
        saveTodos(newTodos)
    }

    const deleteItem = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(todo => todo.text === text)
        newTodos[todoIndex] = newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }
    
    return (
        <TodoContext.Provider value={{
            todos,
            saveTodos,
            addTask,
            totalTodos,
            completedTodos,
            listTodo,
            deleteItem,
            completeItem
        }}
        >
            {props.children}
        </TodoContext.Provider>
    );
}

export {TaskProvider, TodoContext};