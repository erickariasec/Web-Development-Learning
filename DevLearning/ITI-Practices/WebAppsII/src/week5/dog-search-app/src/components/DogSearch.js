import "./DogSearch.css";

const DogSearch = ({search, setSearch}) => {
  
    const getInputValue = (event) => {
        let myValue = event.target.value;
        setSearch(myValue)
    };

    return (
        <>
            <input
                className="dog-search"
                type={"text"}
                placeholder="Search..."
                value={search}
                onChange={getInputValue}
            />
        </>
    );
};

export { DogSearch };
