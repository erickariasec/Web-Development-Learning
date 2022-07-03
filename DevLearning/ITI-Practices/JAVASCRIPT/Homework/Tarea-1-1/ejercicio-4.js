// 4. Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

const firstName = "Juan David";
const lastname = "Castro Gallego";
const completeName = firstName + " " + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");


// CONVERTED TO FUNCTION

function showInformation(completeName, nickname) {
    this.completeName = completeName;
    this.nickname = nickname;
    return "Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".";
}

console.log(showInformation(completeName, nickname));