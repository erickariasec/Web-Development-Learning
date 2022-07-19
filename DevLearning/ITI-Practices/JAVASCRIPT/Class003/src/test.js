import fetch from "node-fetch";
const API = "https://rickandmortyapi.com/api";

// const fetchData = async (urlAPI) => {
//     const response = await fetch(urlAPI);
//     return await response.json();
// };

const fetchData = (urlAPI) => {
    return new Promise((resolve) => {
        resolve(fetch(urlAPI).then((res) => res.json()));
    });
}

async function asyncFetchData() {
    try {
        const data1 = await fetchData(`${API}/character`);
        console.log(data1.info.count);
        //return data1;

    } catch (err) {
        console.error(err);
    }
}

asyncFetchData();

// const response = await fetchData(`${API}/character`);

// const responseJSON = await response.json();

// console.log(responseJSON);