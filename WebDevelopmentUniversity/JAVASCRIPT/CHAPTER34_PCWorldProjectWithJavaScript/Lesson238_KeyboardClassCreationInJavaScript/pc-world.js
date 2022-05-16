class InputDevice {
    constructor(inputType, brand) {
        this._inputType = inputType;
        this._brand = brand;
    }
    get inputType() {
        return this._inputType;
    }
    set inputType(inputType) {
        this._inputType = inputType;
    }
    get brand() {
        return this._brand;
    }
    set brand(brand) {
        this._brand = brand;
    }
}

class Mouse extends InputDevice {
    static counterMouses = 0;

    constructor(inputType, brand) {
        super(inputType, brand);
        this._idMouse = ++Mouse.counterMouses;
    }
    get idMouse() {
        return this.idMouse;
    }
    toString() {
        return `Mouse: [idMouse: ${this._idMouse}, inputType: ${this._inputType}, brand: ${this._brand}]`;
    }
}

class Keyboard extends InputDevice {
    static counterKeyboards = 0;

    constructor(inputType, brand) {
        super(inputType, brand);
        this._idKeyboard = ++Keyboard.counterKeyboards;
    }
    get idKeyboard() {
        return this._idKeyboard;
    }
    toString() {
        return `Keyboard: [idKeyboard: ${this._idKeyboard}, inputType: ${this._inputType}, brand: ${this._brand}]`;
    }
}

let mouse1 = new Mouse("USB", "Genius");
console.log(mouse1.toString());
let mouse2 = new Mouse("Bluetooth", "Dell");
mouse2.brand = "Genius";
console.log(mouse2.toString());

let keyboard1 = new Keyboard("Bluetooth", "Logitech");
let keyboard2 = new Keyboard("USB", "Corsair");
console.log(keyboard1.toString());
console.log(keyboard2.toString());