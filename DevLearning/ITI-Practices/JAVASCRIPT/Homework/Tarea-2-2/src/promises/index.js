const xhttp = new XMLHttpRequest();
const API = "https://rickandmortyapi.com/api";

function fetchData(urlAPI) {
    return new Promise(function (resolve, reject) {
        xhttp.open("GET", urlAPI, true);
        xhttp.onreadystatechange = function (event) {
            if (xhttp.readyState === 4) {
                if (xhttp.status === 200) {
                    resolve(JSON.parse(xhttp.responseText));
                } else {
                    reject(console.error(`Error: ${xhttp.statusText} ${urlAPI}`));
                }
            }
        };
        xhttp.send();
    });
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
