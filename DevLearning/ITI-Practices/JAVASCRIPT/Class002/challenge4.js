/*
Reto #4 - Lista de invitados
Estás organizando un banquete al que quieres invitar a tus amigos.
Crea un programa que pida el nombre de uno de tus amigos, al
hacerlo aumenta en uno una variable contadora, después pregunta si
quieres invitar a alguien más: si la respuesta es afirmativa entonces
pregunta por una persona más;
en caso contrario cierra el ciclo y muestra en pantalla cuantos invitados son.
*/

let userName = "";
let countUsers = 0;
let checkAnotherName = "";

do {
    userName = prompt("Enter a name: ");
    countUsers++;
    checkAnotherName = prompt("Do you want to invite someone else? (Y/N)");
} while (checkAnotherName === 'Y');

countUsers = Number(prompt(`Total guests: ${countUsers}`));