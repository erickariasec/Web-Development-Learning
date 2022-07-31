// ! Para no tener errores, ejecutar en un about:blank

// 3. DESCUENTOS:
// Un almacén de escritorios hace los siguientes descuentos: si el
// cliente compra menos de 5 unidades se le da un descuento del 10%
// sobre la compra; si el número de unidades es mayor o igual a cinco,
// pero menos de 10 se le otorga un
// 20% y, si son 10 o más se le da un 40%.

// Supongamos que cada escritorio cuesta $400
const DESK_PRICE = 400;
let answerPrompt = "";

do {
    let numDesks = Number(
        prompt(`Ingrese la cantidad de escritorios que desea comprar:`)
    );
    let totalPriceDesks = numDesks * DESK_PRICE;
    let totalDiscount = 0;
    let totalToPay = 0;
    let percentage = 0;

    if (numDesks < 5) {
        percentage = 10
        totalDiscount = (totalPriceDesks * percentage)/100;
        totalToPay = totalPriceDesks - totalDiscount;
    } else if (numDesks >= 5 && numDesks < 10) {
        percentage = 20;
        totalDiscount = totalPriceDesks * (percentage / 100);
        totalToPay = totalPriceDesks - totalDiscount;
    } else if (numDesks >= 10) {
        percentage = 40;
        totalDiscount = totalPriceDesks * (percentage / 100);
        totalToPay = totalPriceDesks - totalDiscount;
    }

    answerPrompt = prompt(
        `Has recibido un ${percentage}% de descuento!\n\nTotal a pagar: $${totalToPay}\n\nDeseas hacer un nuevo pedido? (Y/N)`
    );
} while (answerPrompt == "Y");