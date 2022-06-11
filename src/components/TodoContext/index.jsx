import React, {useState} from 'react'
import { useLocalStorage } from './useLocalStorage'


const TodoContext = React.createContext()


export const generarId = () =>{
  const randon = Math.random().toString(36).substring(2)
  const fecha = Date.now().toString(36)

  return randon + fecha
}

function TodoProvider(props) {
    const {todos,saveTodo,loading} = useLocalStorage("TODO_V1", [])
    
    const [searchValue, setSearchValue] = useState('')
    const [openModal, setOpenModal] = useState(false)
    
    const todoComplet = todos.filter(todo => !!todo.completed).length
    const todoCount = todos.length;
    
    let searchTodos = [];
    
    if(!searchValue.length >= 1){
      searchTodos = todos
    }else{
      searchTodos = todos.filter(todo => {
        const todoText = todo.name.toLowerCase()
        const searchText = searchValue.toLowerCase()
    
        return todoText.includes(searchText)
      })
    }
   
    
    
    const addTodo = text => {
       const newTodo = [...todos]
       newTodo.push({
        id: generarId(),
        completed: false,
        name: text
       })
       saveTodo(newTodo)     
       
    }
    const completedTodo = id => {
      console.log(id)
       const todoIndex = todos.findIndex( todo => todo.id === id)
       const newTodo = [...todos]
       newTodo[todoIndex].completed = true
       saveTodo(newTodo)     
       
    }
    const deleteTodo = id => {
      const todoIndex = todos.findIndex( todo => todo.id === id)
      const newTodo = [...todos]
      newTodo.splice(todoIndex, 1)
      saveTodo(newTodo)
    }
    
  return (
      <TodoContext.Provider value={{
          todos,
          loading,
          todoComplet,
          todoCount,
          searchValue,
          setSearchValue,
          searchTodos,
          completedTodo,
          deleteTodo,
          openModal,
          setOpenModal,
          addTodo
      }}>
          {props.children}
      </TodoContext.Provider>
  )
}


export {TodoContext,TodoProvider}