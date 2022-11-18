import './App.css';
import Header from './components/Header.js';
import Newtodo from './components/New_todo.js';
import TodoList from './components/Todolist.js';

function App() {
  return (
    <div className="bg-sky-300 mx-52 my-20 py-10 rounded-3xl">
      <Header />
      <Newtodo />
      <TodoList />
    </div>
  );
}

export default App;
