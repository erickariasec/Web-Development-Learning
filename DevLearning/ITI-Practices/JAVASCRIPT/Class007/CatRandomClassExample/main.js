// API Cats Random
const urlAPICatRandom = "https://api.thecatapi.com/v1/images/search?limit=3&api_key=f27f5097-6251-4ee1-a67e-3767cd1d6b4f";

// API Cats Favorite
const urlAPICatFavorite = "https://api.thecatapi.com/v1/favourites?api_key=f27f5097-6251-4ee1-a67e-3767cd1d6b4f";

// API Add Cats to Favorite
const urlAPIAddCatFavorite = "https://api.thecatapi.com/v1/favourites?api_key=f27f5097-6251-4ee1-a67e-3767cd1d6b4f";

const urlAPIRemoveCatFavorite = "https://api.thecatapi.com/v1/favourites/";

// Funcion de obtener gatos randomicos
const getCatsRandom = async () => {
    const response = await fetch(urlAPICatRandom);
    const data = await response.json();
    const div = document.querySelector("#getCatRandom__cats");
    const array = [];
    data.forEach(cat => {
        div.innerHTML = '';
        // Creando mi imagen
        const img = document.createElement('img');
        img.src = cat.url;
        img.width = 200;
        img.height = 200;
        array.push(img);

        // Creando mi button
        const button = document.createElement('button');
        button.innerHTML = "Agregar a favoritos";
        button.onclick = () => {
            addCatsFavorite(cat.id);
        }
        array.push(button);
    });
    div.append(...array);
    console.log(data[0].id);
    
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

// getCatsRandom();

const getCatsFavorite = async () => {
    const response = await fetch(urlAPICatFavorite);
    const data = await response.json();
    const div = document.querySelector("#getCatFavorite__cats");
    const array  = [];
    data.map(catg => {
        div.innerHTML = '';
        // Creando mi imagen
        const img = document.createElement("img");
        img.src = catg.image.url;
        img.alt = catg.user_id;
        // img.setAttribute('alt', catg.user_id);
        img.classList.add('img-favorite');
        // img.className = "img-favorite";
        img.width = 200;
        img.height = 200;
        array.push(img);

        // Creando mi button
        const button = document.createElement("button");
        button.innerHTML = "Eliminar de favoritos";
        button.onclick = () => {
            removeCatsFavorite(catg.id);
        }
        array.push(button);
    });
    div.append(...array);
    console.log(data[0].image);
}

// getCatsFavorite();

// Funcion para agregar los gatos a favoritos
const addCatsFavorite = async (id) => {
    // console.log(id);
    const response = await fetch(urlAPIAddCatFavorite, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            image_id: id,
        }),
    });
    getCatsFavorite();
}

// Funcion para eliminar los gatos de favoritos
const removeCatsFavorite = async (id) => {
    const response = await fetch(`${urlAPIRemoveCatFavorite}${id}?api_key=f27f5097-6251-4ee1-a67e-3767cd1d6b4f`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
        },
    });
    getCatsFavorite();
};


// Funcion para eliminar los gatos de favoritos