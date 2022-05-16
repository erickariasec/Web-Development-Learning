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

class Monitor {
    static counterMonitors = 0;

    constructor(brand, size) {
        this._idMonitor = ++Monitor.counterMonitors;
        this._brand = brand;
        this._size = size;
    }
    get idMonitor() {
        return this._idMonitor;
    }
    toString() {
        return `Monitor: [idMonitor: ${this._idMonitor}, brand: ${this._brand}, size: ${this._size}"]`;
    }
}

class Computer {
    static counterComputers = 0;

    constructor(computerName, monitor, mouse, keyboard) {
        this._idComputer = ++Computer.counterComputers;
        this._computerName = computerName;
        this._monitor = monitor;
        this._mouse = mouse;
        this._keyboard = keyboard;
    }
    toString() {
        return `Computer No.${this._idComputer}: ${this._computerName} \n${this._monitor} \n${this._mouse} \n${this._keyboard}\n`;
    }
}

class Order {
    static counterOrders = 0;

    constructor() {
        this._idOrder = ++Order.counterOrders;
        this._computers = [];
    }
    get idOrder() {
        return this._idOrder;
    }
    addComputer(computer) {
        this._computers.push(computer);
    }
    showOrder() {
        let orderComputers = '';
        for(let computer of this._computers) {
            orderComputers += `\n${computer}`;
        }
        console.log(`Order: ${this._idOrder}, Computers: ${orderComputers}`);
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

let monitor1 = new Monitor("LG", 15);
let monitor2 = new Monitor("Dell", 17);
console.log(monitor1.toString());
console.log(monitor2.toString());

let computer1 = new Computer("Dell", monitor2, mouse1, keyboard1);
console.log(computer1.toString());
console.log(`${computer1}`); // ! Prints the same result with template string
let computer2 = new Computer("Personalized", monitor1, mouse2, keyboard2);
console.log(computer2.toString());

let order1 = new Order();
order1.addComputer(computer1);
order1.addComputer(computer2);
order1.addComputer(computer1);
order1.showOrder();

let order2 = new Order();
order2.addComputer(computer2);
order2.addComputer(computer1);
order2.showOrder();