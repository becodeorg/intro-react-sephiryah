function SubmitButton() {
    return (
        <button className="block rounded-full bg-sky-500/75 py-2 px-5 mx-auto my-5">Add Todo</button>
    );
}

export default function Newtodo() {
    return (
        <div>
            <input placeholder="Type a new todo" className=""></input>
            <SubmitButton />
        </div>
    );
}

