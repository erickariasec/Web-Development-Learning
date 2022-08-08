# FORO 3

## Implementación de los métodos POST, DELETE y PUT. 

Mi consulta va a ser basada en el proyecto que estoy realizando en prácticas (Ramé Store) usando [Fake Store API](https://fakestoreapi.com/).  

Como ya sabemos, de forma predeterminada, `fetch()` realiza una solicitud `GET`. Esto significa que tenemos que escribir menos código para este tipo de solicitud en comparación con los otros métodos. La sintaxis de una solicitud `GET` de obtención es la siguiente y es la que hemos venido trabajando durante este tiempo:  

```js
fetch("https://fakestoreapi.com/products");
```

Y esa sería nuestra solicitud en sí, aunque si ya queremos ir manejando los resultados de una manera más específica, podríamos hacerlo de la siguiente manera:

```js
const API_products = "https://fakestoreapi.com/products";
fetch(`${API_products}/1`)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
```

### Implementación del Método POST
Para realizar una solicitud `POST`, debemos cambiar el comportamiento predeterminado de fetch (que es hacer una solicitud GET). Esto se hace agregando un objeto como segundo argumento en una llamada de búsqueda.  

La propiedad `method` en el objeto, especifica el método de solicitud. Para este caso, lo estableceremos como `POST` ya que vamos a enviar información al servidor. 

Luego, en un objeto anidado dentro de la propiedad `headers`, especificamos el tipo de contenido. Por lo general, suele ser application/json.  

Finalmente, en el `body` de la solicitud, pasamos los datos a enviar. Si se envía un objeto JavaScript, debemos convertirlo a formato JSON envolviéndolo en `JSON.stringify()`.

Aquí en este ejemplo, podemos ver la aplicación de este método:   

```js
const API_products = "https://fakestoreapi.com/products";
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
```
