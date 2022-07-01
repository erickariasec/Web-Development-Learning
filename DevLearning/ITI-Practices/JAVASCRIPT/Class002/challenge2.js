/*Reto #2 - Más allá del cuarenta y dos
Crea un código que pida al usuario un número y se repita
hasta que coloque un número mayor a 42. Cuando se cumpla
esta condición muestra el resultado en pantalla indicando
esto al usuario y finaliza el ciclo.*/

let userNumber = 0;
let promptAnswer = "";

while(userNumber <= 42) {
    userNumber = Number(prompt("Enter a number:"));
    if (userNumber > 42) {
        promptAnswer = prompt(`The number ${userNumber} is greater than 42! \n\nTHANKS FOR YOUR PARTICIPATION!`);
    }
}