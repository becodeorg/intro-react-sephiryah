function Checkbox() {
    return (
        <input type='checkbox'></input>
    );
}

export default function TodoList() {
    return (
        <>
            <h2>Todos</h2>
            <ul>
                <li><Checkbox />Make a to-do-list</li>
                <li><Checkbox />Feed my cat</li>
                <li><Checkbox />Sleep (a lot)</li>
            </ul>
        </>
    );
}