import "./TodoSearch.css";

const TodoSearch = ({search, setSearch}) => {
  
  // const [value, setValue] = useState("");
  
  const getInputValue = (event) => {
      console.log(event.target.value);
      let myValue = event.target.value;
      setSearch(myValue)
  };

    return (
        <>
            <input
                className="todo-search"
                type={"text"}
                placeholder="Search..."
                onChange={getInputValue}
            />
            <p>{search}</p>
        </>
    );
};

export { TodoSearch };
