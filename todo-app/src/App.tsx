import React, { useState, createContext } from "react";
import "./App.css";
import TodoWrapper from "./components/TodoWrapper";

// Define the context type
interface TodoClickContextType {
  clickedTodo: string;
  setClickedTodo: (todo: string) => void;
}

// Create context with default undefined and handle it later using a provider
export const TodoClickContext = createContext<TodoClickContextType | undefined>(
  undefined
);

const App: React.FC = () => {
  const [clickedTodo, setClickedTodo] = useState<string>("");

  return (
    <TodoClickContext.Provider value={{ clickedTodo, setClickedTodo }}>
      <div className="App">
        {clickedTodo && <h2>{clickedTodo} is Clicked!</h2>}
        <TodoWrapper />
      </div>
    </TodoClickContext.Provider>
  );
};

export default App;
