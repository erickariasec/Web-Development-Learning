// const fruits = ['pera', 'manzana', 'mandarina'];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
// fruits.forEach(function(i){
//     console.log(i);
// })
// fruits.forEach(function(i){
//     console.log(i);
// });
// fruits.forEach((i) => console.log(i));



// Fetch
// npm i node-fetch

import fetch from 'node-fetch'
const API = "https://rickandmortyapi.com/api";

// const isTrue = new Promise((resolve, reject) => {
//     if (true) {
//         resolve("Hey, congratulations");
//     } else {
//         reject("Error");
//     }
// })

// isTrue
// .then(i => console.log(i))
// .catch(i);

const fetchData = (urlAPI) => {
    return fetch(urlAPI).then(res => res.json());
}

fetchData(`${API}/character`)
    .then((data1) => {
        console.log(data1.info.count);
        return fetchData(`${API}/character/${data1.results[0].id}`);
    })
    .then((data2) => {
        console.log(data2.name);
        return fetchData(`${API}/location/${data2.id}`);
    })
    .then((data3) => {
        console.log(data3.dimension);
    })


    .catch((err) => console.error(err));