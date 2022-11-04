import React from "react";

const TodoItem = (props) => {
  return (
    <li>
      <span> 7 </span>
      <p>{props.text}</p>
      <span> X </span>
    </li>
  );
}

export {TodoItem}
