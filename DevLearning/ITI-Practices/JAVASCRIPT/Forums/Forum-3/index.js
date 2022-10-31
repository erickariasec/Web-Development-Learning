import fetch from "node-fetch";
const API_products = "https://fakestoreapi.com/products";

fetch(`${API_products}/1`)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));

fetch(`${API_products}`, {
    method: "POST",
    headers: {
        "Content-type": "application/json",
    },
    body: JSON.stringify({
        title: "test product",
        price: 13.99,
        description: "This is the new product added",
        image: "https://i.pravatar.cc",
        category: "electronic",
    }),
})
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));

fetch(`${API_products}/7`, {
    method: "PUT",
    headers: {
        "Content-type": "application/json",
    },
    body: JSON.stringify({
        title: "product updated",
        price: 15.59,
        description: "Product 7 is updated",
        image: "https://i.pravatar.cc",
        category: "electronic",
    }),
})
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));

fetch(`${API_products}/6`, {
    method: "DELETE",
    headers: {
        "Content-type": "application/json"
    }
})
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));