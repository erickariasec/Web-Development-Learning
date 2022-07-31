// ! Para no tener errores, ejecutar en un about:blank

// 1. ORDENACIÓN DE TRES NÚMEROS: 
// Construir un programa que pida por pantalla 3 números y luego
// diga cuál es el mayor, el del medio y el menor de los números
// ingresados.

// Initialize variables
let mayor = 0;
let menor = 0;
let medio = 0;
let mostrarOrden = "";

do {
    let num1 = Number(prompt(`Ingresa el primer número:`));
    let num2 = Number(prompt(`Ingresa el segundo número:`));
    let num3 = Number(prompt(`Ingresa el tercer número:`));

    if (num1 > num2 && num1 > num3) {
        if (num2 > num3) {
            mayor = num1;
            medio = num2;
            menor = num3;
        } else {
            mayor = num1;
            medio = num3;
            menor = num2;
        }
    } else if (num2 > num1 && num2 > num3) {
        if (num1 > num3) {
            mayor = num2;
            medio = num1;
            menor = num3;
        } else {
            mayor = num2;
            medio = num1;
            menor = num3;
        }
    } else if (num3 > num1 && num3 > num2) {
        if (num1 > num2) {
            mayor = num3;
            medio = num1;
            menor = num2;
        } else {
            mayor = num3;
            medio = num2;
            menor = num1;
        }
    }

    mostrarOrden = prompt(
        `ORDENACIÓN DE 3 NÚMEROS:\n\nMayor = ${mayor}\n\nMedio = ${medio}\n\nMenor = ${menor}\n\nDeseas continuar? (Y/N)`
    );
    mayor = 0, menor = 0, medio = 0;
} while (mostrarOrden == 'Y');