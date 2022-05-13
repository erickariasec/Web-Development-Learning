class Client extends Person {

    static counterClients = 0;

    constructor(firstName, lastName, age, registrationDate) {
        super(firstName, lastName, age);
        this._idClient = ++Client.counterClients;
        this._registrationDate = registrationDate;
    }

    get idClient() {
        return this._registrationDate;
    }

    get registrationDate() {
        return this._registrationDate;
    }

    set registrationDate(registrationDate) {
        this._registrationDate = registrationDate;
    }

    toString() {
        return `${super.toString()} ${this._idClient} ${this._registrationDate}`;
    }
}