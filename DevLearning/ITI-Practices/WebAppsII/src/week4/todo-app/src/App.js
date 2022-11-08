import './App.css';

import { TodoButton } from "./components/TodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";

const todos = [
    { content: "Learn React Native", completed: true },
    { content: "Learn Next.js", completed: false },
    { content: "Learn Angular", completed: false },
    { content: "Learn Vue.js", completed: false },
];

function App() {
    return (
        <div className="todo-container">
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {todos.map((todo) => (
                    <TodoItem key={todo.content} text={todo.content} />
                ))}
            </TodoList>
            <TodoButton />
        </div>
    );
}

export default App;
