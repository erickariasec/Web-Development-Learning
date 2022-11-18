import { useState } from 'react';
import './App.css';

import { TodoButton } from "./components/TodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";


function App() {
    const [todos, setTodos] = useState([
        { content: "React Native", completed: true },
        { content: "Next.js", completed: false },
        { content: "Angular", completed: false },
        { content: "Vue.js", completed: false },
    ]);

    const [search, setSearch] = useState("");

    const totalTODOs = todos.length;
    const completedTODOs = todos.filter((todo) => !!todo.completed).length;

    let searchedTodos = [];

    if (!search.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
            const todoContent = todo.content.toLowerCase();
            const searchContent = search.toLowerCase();
            return todoContent.includes(searchContent);
        });
    }

    const completeTODO = (id) => {
        const newTodos = [...todos];
        newTodos[id].completed = true;
        setTodos(newTodos);
    };

    const deleteTODO = (id) => {
        const newTodos = [...todos];
        newTodos.splice(id, 1);
        setTodos(newTodos);
    };

    return (
        <div className="todo-container">
            <TodoCounter total={totalTODOs} completed={completedTODOs} />
            <TodoSearch
                search={search}
                setSearch={setSearch}
                totalTODOs={totalTODOs}
            />
            <TodoList>
                {searchedTodos.map((todo, id) => (
                    <TodoItem
                        key={id}
                        id={id}
                        todo={todo}
                        onComplete={completeTODO}
                        onDelete={deleteTODO}
                    />
                ))}
            </TodoList>
            <TodoButton />
        </div>
    );
}

export default App;
