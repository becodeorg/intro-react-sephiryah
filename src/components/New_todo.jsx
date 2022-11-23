export default function Newtodo({inputRef, clickHandler, clearTodo}) {    
    return (
        <div>
            <input ref={inputRef} type='text' placeholder="Type a new todo" className="rounded-lg w-3/4 mx-auto md:w-1/2 xl:w-1/4 block"></input>
            <br />
            <div className="flex justify-evenly ">
                <button onClick={clickHandler} className="rounded-full bg-sky-500/75 py-2 px-5 my-2">Add Todo</button>
                <button onClick={clearTodo} className="rounded-full bg-sky-500/75 py-2 px-5 my-2">Clear the Todo list</button>
            </div>
        </div>
    );
}

