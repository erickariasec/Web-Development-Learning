# Foro 1 - Asincronismo

Es una forma de evitar el flujo lineal de JavaScript estándar y agregar cierta flexibilidad a nuestro código, por lo que puede esperar a que una función termine de ejecutarse o dejar que se ejecute en segundo plano y terminar a su debido tiempo.  

Para comprender mejor la naturaleza asíncrona de JavaScript, debemos tener muy claro los siguientes conceptos: 
- [Callback Functions](#callback-functions)
- [Promises](#promises)
- [Async-await](#async-await)

## Callback Functions
Un callback es una función que se pasa dentro de otra función y luego se llama en esa función para realizar una tarea.
```js
console.log('Este es primero');
console.log('Este es segundo');

setTimeout(()=>{
    console.log('Este es tercero');
},2000);

console.log('Este es último');
```  
El fragmento anterior es un pequeño programa que registra cosas en la consola. Pero hay algo nuevo aquí. El intérprete ejecutará la primera instrucción, luego la segunda, pero saltará la tercera y ejecutará la última.  

La función de JavaScript `setTimeout` toma dos parámetros. El primer parámetro es otra función, y el segundo es el tiempo después del cual se debe ejecutar esa función en milisegundos.  

La función interna `setTimeout` en este caso debe ejecutarse después de dos segundos (2000 milisegundos). Imaginemos que se lleva a cabo para ejecutarse en alguna parte separada del navegador, mientras que las otras instrucciones continúan ejecutándose. Después de dos segundos, se devuelven los resultados de la función.  

Es por eso que si ejecutamos el fragmento anterior en nuestro programa, obtendremos esto:
```
Este es primero
Este es segundo
Este es último
Este es tercero
```  

La última instrucción se registra antes de que la función `setTimeout` devuelva su resultado. Digamos que usamos este método para obtener datos de una base de datos. Mientras el usuario espera que la llamada a la base de datos devuelva resultados, el flujo de ejecución no se interrumpirá.  

Este método fue muy eficiente, pero solo hasta cierto punto. A veces, los desarrolladores tenemos que realizar múltiples llamadas a diferentes fuentes en su código. Para realizar estas llamadas, las devoluciones de llamada se anidan hasta que se vuelven muy difíciles de leer o mantener. Esto se conoce como Callback Hell.

Para solucionar este problema, se introdujeron promesas.

## Promises
Una promesa, es algo que llevará algún tiempo cumplir. Hay dos resultados posibles de una promesa:
- O ejecutamos y resolvemos la promesa, o
- Se produce algún error a lo largo de la línea y se rechaza la promesa  

Las promesas llegaron para resolver los problemas de las funciones de devolución de llamada. Una promesa toma dos funciones como parámetros. Es decir, `resolve` y `reject`. Recuerde que `resolve` es éxito y `reject` es para cuando ocurre un error.

Veamos cómo funcionan las promesas con un ejemplo:
```js
const getData = (dataEndpoint) => {
   return new Promise ((resolve, reject) => {
      //alguna solicitud al endpoint;
     
      if(la solicitud es exitosa){
         //do something;
         resolve();
      }
      else if(existe un error){
         reject();
      }
   
   });
};
```  

El código anterior es una promesa, incluida en una solicitud a algún end point. La promesa abarca `resolve` y `reject`.  

Después de hacer una llamada al end point, por ejemplo, si la solicitud es exitosa, resolveríamos la promesa y seguiríamos haciendo lo que queramos con la respuesta. Pero si hay un error, la promesa será rechazada.  

Las promesas son una buena forma de solucionar los problemas provocados por la devolución de llamadas, en un método conocido como encadenamiento de promesas. Se puede usar este método para obtener secuencialmente datos de múltiples end points, pero con menos código y métodos más sencillos.  

¡Hay una manera aún mejor! Es una forma preferida de manejar datos y llamadas a la API en JavaScript.

## Async-await
Encadenar promesas al igual que las funciones callback puede volverse bastante voluminoso y confuso. Es por eso que se crearon Async y Await.  

Para definir una función asíncrona, simplemente tenemos que hacer esto:
```js
const asyncFunc = async() => {

}
```

Debemos tener en cuenta que llamar a una función asíncrona siempre devolverá una Promesa. Por ejemplo:
```js
const test = asyncFunc();
console.log(test);
```

Al ejecutar lo anterior en la consola del navegador, vemos que `asyncFunc` devuelve una promesa.  

Analicemos realmente algo de código ahora. Consideremos el fragmento a continuación:
```js
const asyncFunc = async () => {
	const response = await fetch(resource);
   	const data = await response.json();
}
```  

La palabra clave `async` es lo que usamos para definir funciones asíncronas como se mencionó anteriormente. Pero ¿qué tal `await`? Bueno, impide que JavaScript se asigne `fetch` a la variable de respuesta hasta que se haya resuelto la promesa. Una vez que se ha resuelto la promesa, los resultados del método de búsqueda ahora se pueden asignar a la variable de respuesta.  

Lo mismo sucede en la línea 3. El método `.json` devuelve una promesa y podemos usar `await` todavía para retrasar la asignación hasta que se resuelva la promesa.
