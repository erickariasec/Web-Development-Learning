function submitEventHandeler(event) {
    event.preventDefault();

    let inputValueBase = base.value;
    let inputValueHeight = height.value;

    let areaText = document.querySelector("#display-result");

    let area = (inputValueBase * inputValueHeight) / 2;
    areaText.textContent = "Area = " + area;
}

function resetb() {
    event.preventDefault();
    base.value = "";
    height.value = "";
}

let form = document.querySelector("#todo-input");
let base = document.querySelector("#todo-input #base");
let height = document.querySelector("#todo-input #height");

form.onsubmit = submitEventHandeler;
