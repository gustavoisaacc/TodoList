
import Check from './Check';
import DeleteIcon from './DeleteIcon';
import Edit from './Edit';
import './list.css'

function List({todo}) {
    console.log(todo.complete)
    return (
        <li className='list'>
            <Check className="icon icon--check"/>
            <span className={`${todo.complete ? 'text--checked' : ''}`}>
            {todo.title}
            </span>
            <Edit className="icon icon--edit"/>
            <DeleteIcon todos={todo} className="icon icon--delete"/>
        </li>
    );
}

export {List};