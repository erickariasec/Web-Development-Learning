import React from "react";
import "./TodoItem.css"
import { BsFillTrashFill, BsCheckCircle } from "react-icons/bs";

const TodoItem = (props) => {
  return (
    <li className="todo-item">
      <span className="check"> <BsCheckCircle /> </span>
      <p className="paragraph">{props.text}</p>
      <span className="trash"> <BsFillTrashFill /> </span>
    </li>
  );
}

export {TodoItem}
