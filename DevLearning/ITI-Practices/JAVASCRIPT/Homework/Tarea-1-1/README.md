# TAREA 1.1

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

1. Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
   - Nombre: Erick - `string`
   - Apellido: Arias - `string`
   - Nombre de usuario en ITI: erick.arias `string`
   - Edad: 23 - `number`
   - Correo electrónico: erick.arias@iti.edu.ec - `string`
   - Mayor de edad: Sí - `boolean`
   - Dinero ahorrado: 1000 - `number`
   - Deudas: 100 - `number`
2. Traduce a código JavaScript las variables del ejemplo anterior y adjunta una captura.
```js
const firstName = "Erick";
const lastName = "Arias";
const ITI_UserName = "erick.arias";
let age = 23;
const email = "erick.arias@iti.edu.ec";
const checkAdult = true;
let moneySaved = 1000;
let debts = 100;
```

3. Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
   - Nombre completo (nombre y apellido)
   - Dinero real (dinero ahorrado menos deudas)
```js
const fullName = `${firstName} ${lastName}`;
console.log(fullName); // Erick Arias

let realMoney = `${moneySaved - debts}`;
console.log(realMoney); // 900
```
   
4. Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
```js
const firstName = "Juan David";
const lastname = "Castro Gallego";
const completeName = firstName + " " + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```
```js
// CONVERTED TO FUNCTION

function showInformation(completeName, nickname) {
    this.completeName = completeName;
    this.nickname = nickname;
    return "Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".";
}

console.log(showInformation(completeName, nickname));
```

5. ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
   - `if` para especificar un bloque de código que se ejecutará, si una condición especificada es verdadera.
   - `else` para especificar un bloque de código a ejecutar, si la misma condición es falsa.
   - `else-if` para especificar una nueva condición para probar, si la primera condición es falsa.
   - `switch` para especificar muchos bloques alternativos de código para ejecutar. Una instrucción `switch` funciona mucho más rápido que una instrucción `else-if` equivalente. Esto sucede porque el compilador genera una tabla de saltos para un conmutador durante la compilación. Como resultado, durante la ejecución, en lugar de verificar qué caso se cumple, solo decide qué caso debe ejecutarse.

6. Replica el comportamiento del siguiente código que usa la sentencia switch Utilizando `if`, `else` y `else if`
```js
const tipoDeMatricula = "Basic";
switch (tipoDeMatricula) {
     case "Free":
          console.log("Solo puedes tomar los cursos gratis");
          break;
     case "Basic":
          console.log("Puedes tomar casi todos los cursos de ITI durante un mes");
          break;
     case "Expert":
          console.log("Puedes tomar casi todos los cursos de ITI durante un año");
          break;
     case "ExpertPlus":
          console.log("Tú y alguien más pueden tomar TODOS los cursos de ITI durante un año");
          break;
}
```
```js
// CONVERTED TO IF-ELSE CONDITIONAL

const tipoDeMatricula = "Basic";
if (tipoDeMatricula === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeMatricula === "Basic") {
    console.log("Puedes tomar casi todos los cursos de ITI durante un mes");
} else if (tipoDeMatricula === "Expert") {
    console.log("Puedes tomar casi todos los cursos de ITI durante un año");
} else if (tipoDeMatricula === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de ITI durante un año");
}
```
