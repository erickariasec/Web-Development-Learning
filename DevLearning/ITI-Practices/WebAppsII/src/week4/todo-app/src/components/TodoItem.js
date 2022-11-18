import React from "react";
import "./TodoItem.css"
import { BsFillTrashFill, BsCheckCircle } from "react-icons/bs";

const TodoItem = ({todo, id, onComplete, onDelete }) => {
    return (
        <li className="todo-item">
            <span
                className={`${
                    todo.completed === false ? "unchecked" : "checked"
                }`}
                onClick={() => onComplete(id)}
            >
                {" "}
                <BsCheckCircle />{" "}
            </span>
            <p
                className="paragraph"
                style={{
                    textDecoration: todo.completed ? "line-through 2px" : "",
                    color: todo.completed ? "#6d5c63" : "",
                }}
            >
                {todo.content}
            </p>
            <span className="trash" onClick={() => onDelete(id)}>
                {" "}
                <BsFillTrashFill />{" "}
            </span>
        </li>
    );
}

export {TodoItem}
