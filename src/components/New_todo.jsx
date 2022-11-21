export default function Newtodo({inputRef, clickHandler}) {    
    return (
        <div>
            <input ref={inputRef} type='text' placeholder="Type a new todo" className="rounded-lg w-3/4 md:w-1/2 xl:w-1/4"></input>
            <br />
            <button onClick={clickHandler} className="block rounded-full bg-sky-500/75 py-2 px-5 mx-auto my-5">Add Todo</button>
        </div>
    );
}

