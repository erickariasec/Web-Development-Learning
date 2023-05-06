function submitEventHandeler(event) {
    event.preventDefault();

    let inputValueSide1 = inputSide1.value;
    let inputValueSide2 = inputSide1.value;
    let inputValueSide3 = inputSide1.value;

    let areaText = document.querySelector("#display-result");

    let s = (inputValueSide1 + inputValueSide2 + inputValueSide3) / 2;
    let area = Math.sqrt(
        s *
            (s - inputValueSide1) *
            (s - inputValueSide2) *
            (s - inputValueSide3)
    );
    areaText.textContent = "The Triangle area is : " + area;
    areaText.style.color = "rgb(27, 118, 172)";
}

function resetb() {
    event.preventDefault();
    inputSide1.value = "";
    inputSide2.value = "";
    inputSide3.value = "";
}

let form = document.querySelector("#todo-input");
let inputSide1 = document.querySelector("#todo-input #input-side1");
let inputSide2 = document.querySelector("#todo-input #input-side2");
let inputSide3 = document.querySelector("#todo-input #input-side3");

form.onsubmit = submitEventHandeler;
