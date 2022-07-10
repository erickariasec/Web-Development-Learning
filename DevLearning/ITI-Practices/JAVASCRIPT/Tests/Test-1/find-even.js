/*
    9. Tienes un array de números y debes retornar true si dentro de los números de ese array al menos uno es un número par.  

    En la respuesta colocar el link de solución subida a GitHub 

    La solución debería tener un input y output como los siguientes

    Entrada de datos:
    1. myFunction([1, 3, 5, 7, 10, 11]);  
    2. myFuction([1, 3, 5]);  

    Salida:
    1. true 
    2. False 
*/

function myFunction(numbersArray) {
    let isEven = false;
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] % 2 === 0) {
            isEven = true;
        }
    }
    return isEven;
}

console.log(myFunction([1, 3, 5, 7, 10, 11]));
console.log(myFunction([1, 3 , 5]));