const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://rickandmortyapi.com/api";

function fetchData(urlAPI, callback) {
    let xhttp = new XMLHttpRequest();
    // ! Open API connection
    xhttp.open("GET", urlAPI, true);
    // ! Verify connection status
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) {
            // Validate server response
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error("Error" + urlAPI);
                callback(error, null);
            }
        }
    }
    xhttp.send();
}

fetchData(`${API}/character`, function (error1, data1) {
    if (error1) return console.error(error1);
    fetchData(`${API}/character/${data1.results}`, (error2, data2) => {
        if (error2) return console.error(error2);
        console.log(data2);
    });
})