import { useContext } from 'react';
import { CreateTodo } from './components/CreateTodo';
import {TaskList ,Welcome } from './components/TaskList/index.jsx'
import { List } from './components/List'

import { TodoContext } from './TodoContext'

import './App.css';


function App() {
  const {serchedTodos, listTodo} = useContext(TodoContext)
  
  return (
    <main className="container">
      <CreateTodo/>
      {
        listTodo
        ?(<TaskList>
          {serchedTodos.map((todo)=> <List key={todo.title} todo={todo}/>)}
        </TaskList>)
        :(<Welcome/>)
      }
    </main>
    
  ) 
}

export default App
