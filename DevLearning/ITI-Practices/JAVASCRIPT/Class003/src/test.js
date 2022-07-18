import fetch from "node-fetch";
const API = "https://rickandmortyapi.com/api";

const fetchData = (urlAPI) => {
    return fetch(urlAPI);
};

const response = await fetchData(`${API}/character`);

const responseJSON = await response.json();

console.log(responseJSON);