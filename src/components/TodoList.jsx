import React, { useState } from 'react';

export default function TodoList(props) {
    const [check, setCheck] = useState(false);
    const todos = props.todos;
    const handleChange = event => {
        if (event.target.checked) {
          console.log('✅ Checkbox is checked');
          event.target.closest('li').setAttribute('style','text-decoration: line-through');
        } else {
          console.log('⛔️ Checkbox is NOT checked');
          event.target.closest('li').setAttribute('style','text-decoration: none');
        }
        setCheck(current => !current);
        
      };

    if (todos.length === 0) {
      return (
        <div>
          <h2 className="text-xl font-bold mb-5 lg:text-2xl">My Todo-list</h2>
        </div>
      )
    }
    else {
      return (
        <div>
            <h2 className="text-xl font-bold mb-5 lg:text-2xl">My Todo-list</h2>
            <div className="mx-10 md:mx-30">
                <ul>
                    {todos.map((todo) => (
                    <li className="mb-3 text-left" key={todo}><input type='checkbox' value={check} onChange={handleChange}></input> {todo}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
    }
}