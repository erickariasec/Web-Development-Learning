/*
    5. Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2
    Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
    Pista: puedes usar la función prompt de JavaScript.
*/

let askUserAnswer = 0;

do {
    askUserAnswer = Number(prompt(`¿Cuánto es 2 + 2?`));
} while (askUserAnswer !== 4)

let correctAnswer = prompt(`FELICITACIONES!\n\nFELICITACIONES!\n\nFELICITACIONES!`);