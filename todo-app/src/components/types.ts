export interface TodoType {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
}

export interface TodoClickContextType {
  setClickedTodo: (task: string | null) => void;
}
