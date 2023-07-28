import React from 'react';

function List({todo}) {
    return (
        <li>
           {todo.title}
        </li>
    );
}

export {List};