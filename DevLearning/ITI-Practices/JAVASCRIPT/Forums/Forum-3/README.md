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
        category: "electronic"
    })
})
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
```  

Cabe recalcar que en el caso de nuestra API, si enviamos un objeto como el código anterior, nos devolverá un objeto con un nuevo `id`, pero nada real se insertará en la base de datos, por lo tanto, si deseamos acceder a ese nuevo `id`, obtendremos un error 404.  

### Implementación del Método PUT

El método `PUT` se implementa de manera similar al método `POST`, con la diferencia que en este caso, `PUT` se usa cuando necesitamos actualizar o reemplazar el estado de cierta información ya existente.

A continuación podemos verlo claramente con este ejemplo:  

```js
const API_products = "https://fakestoreapi.com/products";
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
        category: "electronic"
    })
})
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
```

Como lo habíamos mencionado anteriormente, con respecto a nuestra API, nada real se actualizará en la base de datos.

### Implementación del Método DELETE  

Hacer una solicitud `DELETE` es similar a `POST` y `PUT` en el sentido de que tenemos que especificar esto en un objeto colocado en la posición del segundo argumento en la llamada de búsqueda (para evitar que la búsqueda sea el comportamiento predeterminado de una solicitud GET), pero en este caso lo que vamos a hacer con el uso de este método, es eliminar información del servidor.

Sin embargo, hacer una solicitud `DELETE` requiere un poco menos de sintaxis que POST y PUT, porque no estamos pasando ningún dato para almacenarlo en el servidor.

Aquí podemos apreciarlo mediante este ejemplo:  

```js
const API_products = "https://fakestoreapi.com/products";
fetch(`${API_products}/6`, {
    method: "DELETE",
    headers: {
        "Content-type": "application/json"
    }
})
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
```

Recordemos nuevamente que con el uso de nuestra API, el producto no será eliminado de la base de datos, pero si se envió los datos con éxito, nos devolverá el producto falsamente eliminado.
