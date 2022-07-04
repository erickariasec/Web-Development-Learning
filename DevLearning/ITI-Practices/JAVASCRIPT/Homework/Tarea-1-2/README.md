# TAREA 1.2

## Componente Teórico
- ¿Cómo nace JavaScript?
  - Nace con la necesidad de generar dinamismo en las páginas web y que a su vez los usuarios y las empresas pudieran interactuar unos con otros.
  
- ¿Qué es JavaScript?
  - Es un lenguaje interpretado, orientado a objetos, débilmente tipado y dinámico.
  - Débilmente tipado
  - Se pueden hacer operaciones entre tipos distintos de datos (enteros con String, Booleanos con enteros, etc)
  
  ```js
  function solution(array) {
       const newArray = array.map(res => res * 2);
       return newArray;
  }
  
  const array = [2, 4, 5, 6];
  console.log(solution(array));
  ```

## Componente Práctico
Resuelva y conteste los ejercicios propuestos en el documento adjunto.  
Adjunte en el documento el link del repositorio de Github con las soluciones realizadas.

1. ¿Qué es un ciclo?
   - Los ciclos (loops / bucles) facilitan la ejecución de un conjunto de instrucciones/funciones repetidamente mientras alguna condición se evalúa como verdadera; una vez que esta condición deje de cumplirse, el ciclo terminaría su ejecución.

2. ¿Qué tipos de ciclos existen en JavaScript?
   - `while` recorre un bloque de código siempre que la condición especificada se evalúe como verdadera.
   - `do-while` recorre un bloque de código al menos una vez; luego se evalúa la condición. Si la condición es verdadera, la declaración se repite mientras la condición especificada sea verdadera.
   - `for` recorre un bloque de código hasta que el contador alcanza un número específico.
   - `for-in` recorre las propiedades de un objeto.
   - `for-of` recorre los valores de un objeto iterable. 

3. ¿Qué es un ciclo infinito y por qué es un problema?
   - Un ciclo infinito es una pieza de código que sigue ejecutándose para siempre ya que nunca se alcanza la condición de terminación. Un ciclo infinito es un problema porque puede bloquear nuestro programa o navegador y congelar la computadora. Para evitar este tipo de incidentes, es importante ser consciente de los bucles infinitos para que podamos evitarlos.
   
4. Replica el comportamiento de los siguientes ciclos `for` utilizando ciclos `while`
```js
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```
```js
// CONVERTED TO WHILE LOOPS
let i = 0;
while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

let j = 10;
while (j >= 2) {
    console.log("El valor de j es: " + j);
    j--;
}
```

5. Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`
   - Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.  
     Pista: puedes usar la función `prompt` de JavaScript.
```js
let askUserAnswer = 0;

do {
    askUserAnswer = Number(prompt(`¿Cuánto es 2 + 2?`));
} while (askUserAnswer !== 4)

let correctAnswer = prompt(`FELICITACIONES!\n\nFELICITACIONES!\n\nFELICITACIONES!`);
```
     
6. Tienes un array de productos con los siguientes atributos:
   - name
   - price
   - stock  

   Debes agregar y calcular una nueva propiedad llamada "iva", los impuestos deben ser del 12% con base al precio base.  
   Por ejemplo, si aplicamos el 12% de impuestos para un producto con precio de $1000 el resultado de los "IVA" será $190, debes tener en cuenta que como resultado se debe dejar un valor entero sin decimales.
