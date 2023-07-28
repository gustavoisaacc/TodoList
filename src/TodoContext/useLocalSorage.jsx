import { useState } from 'react';

export function useLocalStorage(itemName, initialValue) {

    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
    
    if(!localStorageItem){
        console.log(localStorageItem)
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue
    }else{
        console.log(localStorageItem)
        parsedItem = JSON.parse(localStorageItem);
        // const newItem = [...todos]
        // window.localStorage.setItem('todos',JSON.stringify(newItem) )
        // setItem(JSON.parse('todos'))
    }
    const [item, setItem] = useState(parsedItem)

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem)
    }
    
    return [item,saveItem]
}

