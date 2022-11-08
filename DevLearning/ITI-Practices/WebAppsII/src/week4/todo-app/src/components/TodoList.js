import React from "react";
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <section className="todo-list">
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList }
