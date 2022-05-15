class Product {
    static counterProducts = 0;

    constructor(productName, price) {
        this._idProduct = ++Product.counterProducts;
        this._productName = productName;
        this._price = price;
    }

    get idProduct() {
        return this._idProduct;
    }

    get productName() {
        return this._productName;
    }

    set productName(productName) {
        this._productName = productName;
    }

    get price() {
        return this._price;
    }

    set price(price) {
        this._price = price;
    }

    toString() {
        return `idProduct: ${this._idProduct}, productName: ${this._productName}, price: $${this._price}`;
    }
}

let product1 = new Product("Pants", 200);
let product2 = new Product("Shirt", 100);
console.log(product1.toString());
console.log(product2.toString());