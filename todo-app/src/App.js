import React, { useState, createContext } from 'react';
import './App.css';
import TodoWrapper from './components/TodoWrapper';

// Create a Context to share the clicked todo state
export const TodoClickContext = createContext();

function App() {
  const [clickedTodo, setClickedTodo] = useState("");

  return (
    <TodoClickContext.Provider value={{ clickedTodo, setClickedTodo }}>
      <div className="App">
        
          {/* Show the clicked todo on the top of the page */}
          {clickedTodo && <h2>{clickedTodo} is Clicked!</h2>}
        
        <TodoWrapper />
      </div>
    </TodoClickContext.Provider>
  );
}

export default App;
