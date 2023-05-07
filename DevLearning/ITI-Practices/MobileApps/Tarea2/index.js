function submitEventHandeler(event) {
    event.preventDefault(); // esta línea de código previene que el evento submit del formulario provoque la recarga de la página web.

    let inputValueBase = base.value; //obtiene el valor ingresado por el usuario en el campo de texto con el id base y lo guarda en la variable inputValueBase
    let inputValueHeight = height.value; // obtiene el valor ingresado por el usuario en el campo de texto con el id height y lo guarda en la variable inputValueHeight

    let areaText = document.querySelector("#display-result"); // obtiene el elemento del documento HTML que tiene el id display-result y lo guarda en la variable areaText

    let area = (inputValueBase * inputValueHeight) / 2; // calcula el área del triángulo a partir de los valores ingresados por el usuario y lo guarda en la variable area
    areaText.textContent = "Area = " + area; // actualiza el contenido del elemento con id display-result con el resultado del área calculada en la línea anterior.
}

function resetb() {
    event.preventDefault(); // previene que el evento submit del formulario provoque la recarga de la página web.
    base.value = ""; // esta línea de código establece el valor del campo de texto con id base a una cadena vacía, lo que borra el valor previamente ingresado por el usuario
    height.value = ""; // esta línea de código establece el valor del campo de texto con id height a una cadena vacía, lo que borra el valor previamente ingresado por el usuario.
}

let form = document.querySelector("#todo-input"); // obtiene el elemento del documento HTML que tiene el id todo-input y lo guarda en la variable form
let base = document.querySelector("#todo-input #base"); // obtiene el elemento del documento HTML que tiene el id base dentro del elemento con id todo-input y lo guarda en la variable base
let height = document.querySelector("#todo-input #height"); // obtiene el elemento del documento HTML que tiene el id height dentro del elemento con id todo-input y lo guarda en la variable height

form.onsubmit = submitEventHandeler; // establece la función submitEventHandeler como el manejador de eventos para el evento submit del formulario, lo que significa que cuando el usuario presione el botón de envío del formulario, se llamará a esta función
