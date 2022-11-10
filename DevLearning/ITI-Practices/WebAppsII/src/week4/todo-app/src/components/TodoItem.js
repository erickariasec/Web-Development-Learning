import React from "react";
import "./TodoItem.css"
import { BsFillTrashFill, BsCheckCircle } from "react-icons/bs";

const onCompleteBtn = () => {
  console.log("Completed")
}

const onDeleteBtn = () => {
  console.log("Deleted")
}

const TodoItem = (props) => {
  return (
    <li className="todo-item">
      <span className="check" onClick={onCompleteBtn}> <BsCheckCircle /> </span>
      <p className="paragraph">{props.text}</p>
      <span className="trash" onClick={onDeleteBtn}> <BsFillTrashFill /> </span>
    </li>
  );
}

export {TodoItem}
