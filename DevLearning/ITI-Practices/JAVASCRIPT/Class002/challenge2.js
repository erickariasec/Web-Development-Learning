/*Reto #2 - Más allá del cuarenta y dos
Crea un código que pida al usuario un número y se repita
hasta que coloque un número mayor a 42. Cuando se cumpla
esta condición muestra el resultado en pantalla indicando
esto al usuario y finaliza el ciclo.*/

let number = 0;
while(number <= 42){
    const userNumber = Number(prompt("Ingrese un número mayor a 42"));
    number = userNumber;
    if(42 < number){
        console.log(`El número ${number} es mayor que 42`)
        debugger
    }
};