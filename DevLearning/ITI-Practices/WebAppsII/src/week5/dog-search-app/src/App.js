import { useEffect, useState } from "react";
import "./App.css";
import { DogCard } from "./components/DogCard";
import { DogSearch } from "./components/DogSearch";
import { DogTitle } from "./components/DogTitle";

function App() {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        const fetchDogData = async () => {
            await fetch("https://api.thedogapi.com/v1/breeds")
                .then((res) => res.json())
                .then((dogData) => {
                    setData(dogData);
                })
                .finally(() => setLoading(false));
        };

        fetchDogData();
    }, [setData]);

    let searchedDogs = [];

    if (!search.length >= 1) {
        searchedDogs = data;
    } else {
        searchedDogs = data.filter((dog) => {
            const dogName = dog.name.toLowerCase();
            const searchDogName = search.toLowerCase();
            return dogName.includes(searchDogName);
        });
    }
    return (
        <div className="App">
            <DogTitle />
            <DogSearch search={search} setSearch={setSearch} />
            {loading ? (
                <h1 style={{ textAlign: "center" }}>Loading...</h1>
            ) : (
                <main className="main">
                    <section className="cards">
                        {searchedDogs.map((dog) => (
                            <DogCard key={dog.id} dog={dog} />
                        ))}
                    </section>
                </main>
            )}
        </div>
    );
}

export default App;
