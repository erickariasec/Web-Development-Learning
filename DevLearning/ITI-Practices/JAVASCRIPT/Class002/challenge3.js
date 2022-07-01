/*
Reto #3 - Sumas consecutivas
Pide al usuario que ingrese dos números y los sume. Después
pregunta si quiere añadir otro número: si la respuesta es
afirmativa añádelo al total; en caso contrario finaliza el
ciclo y muestra el resultado total en pantalla.
*/

let num1 = Number(prompt("Enter the first number"));
let num2 = Number(prompt("Enter the second number"));
let total = num1 + num2;
let answer = prompt(`Your answer is ${total} \nDo you want to continue? (Y/N)`);
while (answer === "Y") {
    anotherNumber = Number(prompt("Enter antoher number"));
    total += anotherNumber;
    answer = prompt(`Your answer is ${total} \nDo you want to continue? (Y/N)`);
}