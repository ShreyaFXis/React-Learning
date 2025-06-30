import React, { useState } from "react";
import { TodoType } from "./types";

interface EditTodoFormProps {
  editTodo: (task: string, id: string) => void;
  task: TodoType;
}

const EditTodoForm: React.FC<EditTodoFormProps> = ({ editTodo, task }) => {
  const [value, setValue] = useState<string>(task.task);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editTodo(value, task.id);
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Update Task..."
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default EditTodoForm;
