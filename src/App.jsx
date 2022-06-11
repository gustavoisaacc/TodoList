import {TodoContext} from './components/TodoContext'
import TodoCounter from './components/TodoCounter';
import TodoList from './components/TodoList';
import TodoSearch from './components/TodoSearch';
import TodoItem from './components/TodoItem';
import CreateTodoBoton from './components/CreateTodoBoton'; 
import Modal from './components/Modal';
import TodoForm from './components/TodoForm';

import './App.css';
import { useContext } from 'react';
//  const todoList = [
//    {id: 1, name: 'sofia cuidar el perro', completed: true},
//    {id: 2, name: 'vale limpiar la pieza', completed: true},
//    {id: 3, name: 'copito levantar sus desechos', completed: false}
//  ]




function App() {
  const {
    loading,
    searchTodos,
    completedTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = useContext(TodoContext)


  return (
    <div className="app">
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {loading && <p className='mensaje'>CARGARNDO...</p>}
        {(!loading && !searchTodos.length) && <p className='mensaje'>!Crea tus Tareas¡</p> }
        {
          searchTodos.map(todo => 
            (<TodoItem 
              key={todo.id}
              name={todo.name}
              completed={todo.completed}
              completedTodo={() => completedTodo(todo.id)}
              deleteTodo={() => deleteTodo(todo.id)}
            />
            
            )
          )
        }
      </TodoList>

      {openModal && 
        <Modal>
          <TodoForm />
        </Modal>
      }

      <CreateTodoBoton
        setOpenModal={setOpenModal}
      />
    </div>
  )
}

export default App
