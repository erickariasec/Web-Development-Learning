import React from "react";
import './TodoCounter.css'

const TodoCounter = ({completed, total}) => {
    return (
        <>
            <h2 className="todo-counter">Completed {completed} of {total} TODOs</h2>
        </>
    );
};

export {TodoCounter};
