// import './App.css';

import { TodoButton } from "./components/TodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";

const todos = [
    { content: "Aprender React Native", completed: true },
    { content: "Aprender Next.js", completed: false },
    { content: "Aprender Angular", completed: false },
];

function App() {
    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {todos.map((todo) => (
                    <TodoItem key={todo.content} text={todo.content} />
                ))}
            </TodoList>
            <TodoButton />
        </>
    );
}

export default App;
