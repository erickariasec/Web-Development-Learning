function submitEventHandeler(event) {
    event.preventDefault();

    let inputValueSide1 = inputSide1.value;
    let inputValueSide2 = inputSide1.value;

    let areaText = document.querySelector("#display-result");

    let area = (inputValueSide1 * inputValueSide2) / 2;
    console.log(area);
    areaText.textContent = "The Triangle area is : " + area;
    areaText.style.color = "#000";
}

function resetb() {
    event.preventDefault();
    inputSide1.value = "";
    inputSide2.value = "";
}

let form = document.querySelector("#todo-input");
let inputSide1 = document.querySelector("#todo-input #input-side1");
let inputSide2 = document.querySelector("#todo-input #input-side2");

form.onsubmit = submitEventHandeler;
