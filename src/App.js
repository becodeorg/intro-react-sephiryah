import React, { useRef , useState } from 'react';

import './App.css';
import Newtodo from './components/New_todo';
import TodoList from './components/TodoList';

function App() {
  const inputRef = useRef();
  const initialTodos = ["Sleep (a lot)", "Download TailwindCSS", "Finish Todo List application"];

  const [todos, setTodos] = useState(initialTodos);

  function clickHandler() {
    const inputElement = inputRef.current;

    const newTodos = [...initialTodos];
    newTodos.push(inputElement.value);
    setTodos(newTodos);

    console.log(inputElement.value);
}

  return (
    <div className="bg-sky-300 mx-10 my-20 py-10 rounded-3xl md:mx-40 lg:mx-80">
      <Newtodo inputRef={inputRef} clickHandler={clickHandler}/>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
