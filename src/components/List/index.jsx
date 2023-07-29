
import Check from './Check';
import DeleteIcon from './DeleteIcon';
import Edit from './Edit';
import './list.css'

function List({todo}) {
    return (
        <li className='list'>
            <Check todo={todo}/>
            <span className={`${todo.complete ? 'text--checked' : ''}`}>
                {todo.title}
            </span>
            <Edit/>
            <DeleteIcon todos={todo}/>
        </li>
    );
}

export {List};