import { FC } from 'react'
import { ITodo } from '../../types/types';

interface TodoItemProps {
  todo: ITodo
}
 
const TodoItem: FC<TodoItemProps> = ({todo}) => {
  return ( 
    <div  style={{padding:  15, border: '1px solid tomato'}}>
      <input type="checkbox" checked={todo.completed} />
      {todo.id}. {todo.title} Readiness - {todo.completed ? 'done' : 'in progress'}
    </div>
   );
}
 
export default TodoItem;