import "./TodoSearch.css";

const TodoSearch = ({search, setSearch}) => {
    
    const getInputValue = (event) => {
        let myValue = event.target.value;
        setSearch(myValue)
    };

    return (
        <>
            <input
                className="todo-search"
                type={"text"}
                placeholder="Search..."
                value={search}
                onChange={getInputValue}
            />
            <p>{search}</p>
        </>
    );
};

export { TodoSearch };
