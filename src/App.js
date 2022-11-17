import logo from './logo.svg';
import './App.css';
import Newtodo from './components/new_todo.js';
import SubmitButton from './components/submit_button.js';
import TodoList from './components/checkbox.js';

function App() {
  return (
    <div>
      <h1>My Todo App</h1>
      <Newtodo />
      <SubmitButton />
      <br/>
      <h2>Todos</h2>
      <TodoList />
    </div>
  );
}

export default App;
