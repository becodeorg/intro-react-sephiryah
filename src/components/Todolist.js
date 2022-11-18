function Checkbox() {
    return (
        <input type='checkbox'></input>
    );
}

export default function TodoList() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-5">My Todo-list</h2>
            <div className="mx-72">
                <ul>
                    <li className="mb-3 text-left"><Checkbox /> Make a to-do-list</li>
                    <li className="mb-3 text-left"><Checkbox /> Feed my cat</li>
                    <li className="mb-3 text-left"><Checkbox /> Sleep (a lot)</li>
                </ul>
            </div>
        </div>
    );
}