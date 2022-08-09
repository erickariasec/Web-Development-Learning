import fetch from "node-fetch";
const API = "https://swapi.dev/api/";

const fetchData = (urlAPI) => {
    return fetch(urlAPI).then((res) => res.json());
};

fetchData(`${API}/people/1`)
    .then((person1) => {
        console.log(person1.name);
        console.log(person1.height);
        return fetchData(`${API}/planets/3`);
    })
    .then((planet3) => {
        console.log(planet3.name);
        console.log(planet3.diameter);
        return fetchData(`${API}/starships/2/`);
    })
    .then((starship2) => {
        console.log(starship2.name);
        console.log(starship2.starship_class);
    })

    .catch((err) => console.error(err));