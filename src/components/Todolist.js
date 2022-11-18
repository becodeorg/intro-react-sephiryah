import React, { useState } from 'react';

function Checkbox() {
    const [check, setCheck] = useState(false);

    const handleChange = event => {
        if (event.target.checked) {
          console.log('✅ Checkbox is checked');
        } else {
          console.log('⛔️ Checkbox is NOT checked');
        }
        setCheck(current => !current);
      };

    return (
        <input type='checkbox' value={check} onChange={handleChange}></input>
    );
}

export default function TodoList() {
    const initialTodos = ["Sleep (a lot)", "Download TailwindCSS", "Finish Todo List application"];
    const [todos] = useState(initialTodos);
    return (
        <div>
            <h2 className="text-2xl font-bold mb-5">My Todo-list</h2>
            <div className="mx-72">
                <ul>
                    {todos.map((todo) => (
                    <li className="mb-3 text-left" key={todo}><Checkbox /> {todo}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}