import React from "react";
import "./TodoButton.css"

const onClickButton = (message) => {
    console.log("Hello " + message)
}

const TodoButton = () => (
    <button
        className="todo-button"
        onClick={() => (
            onClickButton("Erick")
        )}
    > + </button>
)

export {TodoButton}