/*
**
***
Generar el consumo de una API (la entregada en clase) y mostrar los videos de Youtube.

*/

// URL API
const API = "https://movies-app1.p.rapidapi.com/api/movies?limit=20&sort=rating&type=movies&year=2021&genres=comedia";

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "30327383ffmshb8a286fb3ebdc83p1e15cfjsn3e35018d52ca",
        "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
    },
};

// Funcion de llamado a nuestra API
const fetchData = async (urlAPI) => {
    const response = await fetch(urlAPI, options);
    const data = await response.json();
    return data;
};

// Get Videos
// Auto llamado de una funcion (function())
(async () => {
    const videos = await fetchData(API);
    const content = document.getElementById("content");
    let view = `
    ${videos.results
        .map(
            (vi) => `
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${vi.image}" alt="" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${vi.title}
                </h3>
            </div>
        </div>`
        )
        .splice(0, 8)
        .join("")}`;
    content.innerHTML = view;
})();