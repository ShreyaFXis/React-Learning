import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { TodoClickContext } from '../App';

function Todo({ task, deleteTodo, editTodo, toggleComplete }) 
{   
  const { setClickedTodo } = useContext(TodoClickContext);


  
  return (
    <div    
      className="Todo"
      onClick={() => {
        toggleComplete(task.id);
        setClickedTodo(task.task);
      }}
    >
      <p className={`${task.completed ? "completed" : "incompleted"}`}>
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={(e) => {
          e.stopPropagation(); // Prevent the click event from triggering for the whole div
          editTodo(task.id);
        }} />
        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={(e) => {
          e.stopPropagation(); // Prevent the click event from triggering for the whole div
          deleteTodo(task.id);
        }} />
      </div>
    </div>
  );
}

export default Todo;
