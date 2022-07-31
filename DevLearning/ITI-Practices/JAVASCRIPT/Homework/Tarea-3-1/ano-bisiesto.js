// ! Para no tener errores, ejecutar en un about:blank

// 2. AÑO BISIESTO
// Construir un programa que pida un año y luego determine si el
// año es bisiesto o no. Tenga en cuenta que los años bisiestos son
// los números múltiplos de 4, pero que no son múltiplos de 100 y si
// son múltiplos de 100 y múltiplos de 400 sí son bisiestos

let answerPrompt = "";

do {
    let yearAsked = Number(prompt(`Ingresa un año:`));

    if (
        (yearAsked % 4 == 0 && yearAsked % 100 != 0) ||
        (yearAsked % 100 == 0 && yearAsked % 400 == 0)
    ) {
        answerPrompt = prompt(
            `${yearAsked} es año bisiesto\n\nDeseas continuar? (Y/N)`
        );
    } else {
        answerPrompt = prompt(
            `${yearAsked} NO año bisiesto\n\nDeseas continuar? (Y/N)`
        );
    }
} while (answerPrompt == "Y");
