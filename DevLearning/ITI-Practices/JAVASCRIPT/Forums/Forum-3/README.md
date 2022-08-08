# FORO 3

## Implementación de los métodos POST, DELETE y PUT. 

Mi consulta va a ser basada en el proyecto que estoy realizando en prácticas (Ramé Store) usando [Fake Store API](https://fakestoreapi.com/).  

Como ya sabemos, de forma predeterminada, `fetch()` realiza una solicitud `GET`. Esto significa que tenemos que escribir menos código para este tipo de solicitud en comparación con los otros métodos. La sintaxis de una solicitud `GET` de obtención es la siguiente y es la que hemos venido trabajando durante este tiempo:  

```js
fetch("https://fakestoreapi.com/products");
```

Y esa sería nuestra solicitud en sí, aunque si ya queremos ir manejando los resultados de una manera más específica, podríamos hacerlo de la siguiente manera haciendo uso de `async` y `await`.

```js
const API_products = "https://fakestoreapi.com/products";
const fetchProducts = async (urlAPI) => {
    const response = await fetch(urlAPI);
    return response.json();
};
async function asyncGetSingleProduct() {
    try {
        const product1 = await fetchProducts(`${API_products}/1`);
        console.log(product1);
    } catch (err) {
        console.error(err);
    }
}
asyncGetSingleProduct();
```

### Implementación del Método POST
