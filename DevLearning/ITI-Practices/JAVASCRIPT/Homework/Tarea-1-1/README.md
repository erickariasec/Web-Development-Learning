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
   - Nombre
   - Apellido
   - Nombre de usuario en ITI
   - Edad
   - Correo electrónico
   - Mayor de edad
   - Dinero ahorrado
   - Deudas
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
   
4. Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
```js
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

5. ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

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
