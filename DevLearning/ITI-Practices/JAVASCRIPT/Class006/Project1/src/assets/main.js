/*
**
***
Generar el consumo de una API (la entregada en clase) y mostrar los videos de Youtube.

*/

// URL API
const API = "https://youtube-v31.p.rapidapi.com/search?channelId=UC5HIvr6g_jHPa8h36hdRMqw&part=snippet%2Cid&order=date&maxResults=10";

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "30327383ffmshb8a286fb3ebdc83p1e15cfjsn3e35018d52ca",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
};

// Declarar nuestras variables
// const content = document.querySelector('#content')
// content.innerHTML = "Hola";

// Funcion de llamado a nuestra API
const fetchData = async (urlAPI) => {
    const response = await fetch(urlAPI, options);
    const data = await response.json();
    return data;
}

// Get Videos
// Auto llamado de una funcion (function())
(async () => {
    const videos = await fetchData(API);
    const content = document.getElementById('content');
    let view = `
    ${videos.items.map((vi) => `
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${vi.snippet.thumbnails.high.url}" alt="" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${vi.snippet.title}
                </h3>
            </div>
        </div>`
    ).splice(0,8).join('')}`;
    content.innerHTML = view;
})();