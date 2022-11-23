import React, { useRef , useState, useEffect } from 'react';

import './App.css';
import Newtodo from './components/New_todo';
import TodoList from './components/TodoList';

const LSKEY = 'MyTodoApp';

function App() {
  const inputRef = useRef();
  
  let initialTodos = [];
  initialTodos = JSON.parse(window.localStorage.getItem(LSKEY + ".todos"));

  const [todos, setTodos] = useState(initialTodos);

  function clickHandler() {
    const inputElement = inputRef.current;

    const newTodos = JSON.parse(JSON.stringify(todos));
    newTodos.push(inputElement.value);
    setTodos(newTodos);
    console.log(newTodos);


    //console.log(inputElement.value);
}

  function clearTodo() {
    setTodos([]);
  }

  useEffect(() => {
      localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));}
    ,[todos]);

  return (
    <div className="bg-gray-400 mx-10 my-20 py-10 rounded-3xl md:mx-40 lg:mx-80">
      <h1 className="text-5xl pb-16">My To-do List</h1>
      <Newtodo inputRef={inputRef} clickHandler={clickHandler} clearTodo={clearTodo}/>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
