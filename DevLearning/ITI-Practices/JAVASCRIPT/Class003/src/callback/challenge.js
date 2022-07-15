// ! Traer el paquete de xmlhttprequest
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// ! Generando un String de mi API de Rick
const API = "https://rickandmortyapi.com/api";

// ! Generar una función para traer los datos
function fetchData(urlAPI, callback) {
    let xhttp = new XMLHttpRequest();
    // ! Open API connection
    xhttp.open("GET", urlAPI, true);
    // ! Verify connection status
    xhttp.onreadystatechange = function (event) {
        // ! Validar el estado de la conexión
        if (xhttp.readyState === 4) {
            // ! Validar la respuesta del servidor
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error("Error" + urlAPI);
                callback(error, null);
            }
        }
    }
    // ! Enviar la solicitud
    xhttp.send();
}

// Te guardo en memoria heap
const newArray = [];
// Llamo a mi function
// Asincronismo
fetchData(`${API}/character`, function (error1, data1) {
    if (error1) return console.error(error1);
    fetchData(`${API}/character/${data1.results[0].id}`, function(error2, data2){
        if (error2) return console.error(error2);
        fetchData(`${API}/location/${data2.id}`, function(error3, data3){
            if (error3) return console.error(error3);
            newArray.push(data1.info.count);
            console.log(newArray);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })
})

// 
console.log(newArray);