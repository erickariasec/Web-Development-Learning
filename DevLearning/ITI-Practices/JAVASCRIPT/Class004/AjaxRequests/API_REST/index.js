const API_URL = 'https://jsonplaceholder.typicode.com';

const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if(this.readyState === 4 && this.status === 200) {
        // 0 = UNSET, no se ha llamado al metodo open.
        // 1 = OPEN, se ha llamado al metodo open.
        // 2 = HEADERS_RECEIVED, se esta llamando al metodo send().
        // 3 = LOADING, esta cargando, es decir, esta recibiendo la respuesta.
        // 4 = DONE, se ha completado la operacion
        const data = JSON.parse(this.response);
        // console.log(data);+
        const HTMLResponse = document.querySelector("#app"); // Insertar respuesta en el HTML

        const template = data.map((user) => `<li>${user.name} 📧 ${user.email}</li>`);
        HTMLResponse.innerHTML = `<ul>${template}</ul>`;
    }
}

xhr.addEventListener('load', onRequestHandler);
xhr.open('GET', `${API_URL}/users`);
xhr.send();