const urlAPICatRandom = "https://api.thecatapi.com/v1/images/search?limit=3&api_key=f27f5097-6251-4ee1-a67e-3767cd1d6b4f";

// Funcion de obtener gatos randomicos
const getCatsRandom = async () => {
    const response = await fetch(urlAPICatRandom);
    const data = await response.json();
    const div = document.querySelector("#getCatRandom__cats");
    console.log(div);
    const array = [];
    data.forEach(cat => {
        // Creando mi imagen
        const img = document.createElement('img');
        img.src = cat.url;
        img.width = 200;
        img.height = 200;
        array.push(img);

        // Creando mi button
        const button = document.createElement('button');
        button.innerHTML = "Agregar a favoritos";
        array.push(button);
    });
    console.log(array);
    div.append(...array);
    
    // const img1 = document.getElementById("img1");
    // // ! const img1 = document.querySelector("#img1"); Antoher way
    // const img2 = document.getElementById("img2");
    // const img3 = document.getElementById("img3");
    // img1.src = data[0].url;
    // img1.width = 200;
    // img1.height = 200;

    // img2.src = data[1].url;
    // img2.width = 200;
    // img2.height = 200;

    // img3.src = data[2].url;
    // img3.width = 200;
    // img3.height = 200;
}

getCatsRandom();

// Funcion para los gatos favoritos
// Funcion para agregar los gatos a favoritos
// Funcion para eliminar los gatos de favoritos