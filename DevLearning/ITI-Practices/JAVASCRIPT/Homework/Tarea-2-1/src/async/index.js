import fetch from "node-fetch";
const API = "https://rickandmortyapi.com/api";

// WAY 1:
const fetchData = async (urlAPI) => {
    const response = await fetch(urlAPI);
    return response.json();
};

// WAY 2:
// const fetchData = (urlAPI) => {
//     return new Promise((resolve) => {
//         resolve(fetch(urlAPI).then((res) => res.json()));
//     });
// };

async function asyncFetchData() {
    try {
        const data1 = await fetchData(`${API}/character`);
        console.log(data1.info.count);

        const data2 = await fetchData(`${API}/character/${data1.results[0].id}`);
        console.log(data2.name);

        const data3 = await fetchData(`${API}/location/${data2.id}`);
        console.log(data3.dimension);
    } catch (err) {
        console.error(err);
    }
}

asyncFetchData();