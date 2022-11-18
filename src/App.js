import './App.css';
import Header from './components/header.js';
import Newtodo from './components/new_todo.js';
import SubmitButton from './components/submit_button.js';
import TodoList from './components/checkbox.js';

function App() {
  return (
    <div>
      <Header />
      <Newtodo />
      <SubmitButton />
      <TodoList />
    </div>
  );
}

export default App;
