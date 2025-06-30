import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { TodoClickContext } from "../App";
import { TodoType } from "./types";

interface TodoProps {
  task: TodoType;
  deleteTodo: (id: string) => void;
  editTodo: (id: string) => void;
  toggleComplete: (id: string) => void;
}

const Todo: React.FC<TodoProps> = ({
  task,
  deleteTodo,
  editTodo,
  toggleComplete,
}) => {
  const context = useContext(TodoClickContext);

  if (!context) {
    throw new Error("TodoClickContext must be used within a Provider");
  }

  const { setClickedTodo } = context;

  return (
    <div
      className="Todo"
      onClick={() => {
        toggleComplete(task.id);
        setClickedTodo(task.task);
      }}
    >
      <p className={task.completed ? "completed" : "incompleted"}>
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          className="edit-icon"
          icon={faPenToSquare}
          onClick={(e) => {
            e.stopPropagation();
            editTodo(task.id);
          }}
        />
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={(e) => {
            e.stopPropagation();
            deleteTodo(task.id);
          }}
        />
      </div>
    </div>
  );
};

export default Todo;
