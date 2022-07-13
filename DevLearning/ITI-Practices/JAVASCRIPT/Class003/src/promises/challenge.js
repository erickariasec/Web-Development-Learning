// Fetch
// npm i node-fetch

import fetch from 'node-fetch'
const API = "https://rickandmortyapi.com/api";

const fetchData = (urlAPI) => {
    return fetch(urlAPI).then(res => res.json())
}

fetchData(`${API}/character`)
.then(data1 => {
    console.log(data1.info.count);
    return fetchData(`${API}/character/${data1.results[0].id}`)
})
.then(data2 => {
    console.log(data2.name);
    return fetchData(`${API}/location/${data2.id}`)
})
.then(data3 => {
    console.log(data3.dimension);
})