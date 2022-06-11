import {useState, useEffect} from 'react'

function useLocalStorage (itemName, itemValeu){
    const [loading, setLoading] = useState(true);
    const [todos, setTodos] = useState(itemValeu);
  
    useEffect(()=>{
      setTimeout(()=>{
        let parseItem;
        const localStorageTodos = localStorage.getItem(itemName);
  
        if(!localStorageTodos){
          localStorage.setItem(itemName, JSON.stringify([]))
          parseItem = itemValeu;
        }else{
          parseItem = JSON.parse(localStorageTodos)
        }
  
        setTodos(parseItem)
        setLoading(false)
      }, 1000)
  
    }, [])
    
    const saveTodo = newTodo => {
      const stringifyTodo = JSON.stringify(newTodo)
      localStorage.setItem(itemName, stringifyTodo)
   
      setTodos(newTodo)
   
    }
  
    return {
      todos,
      saveTodo,
      loading
    }
  
  }

  export {useLocalStorage}