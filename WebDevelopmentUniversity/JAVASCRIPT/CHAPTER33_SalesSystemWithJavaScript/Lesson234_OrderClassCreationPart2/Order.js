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

class Order {
    static counterOrders = 0;

    static get MAX_PRODUCTS() {
        return 5;
    }

    constructor() {
        this._idOrder = ++Order.counterOrders;
        this._products = [];
        this._counterAddedProducts = 0;
    }

    get idOrder() {
        return this._idOrder;
    }

    addProduct(product) {
        if (this._products.length < Order.MAX_PRODUCTS) {
            this._products.push(product);
            // this._products[this._counterAddedProducts++] = product; // ! Another syntax
        } else {
            console.log("No more products can be added");
        }
    }

    calculateTotal() {
        let totalSale = 0;
        for (let product of this._products) {
            totalSale += product.price; // ! totalSale = totalSale + product.price;
        }
        return totalSale;
    }

    showOrder() {
        let productOrder = '';
        for (let product of this._products) {
            productOrder += product.toString() + ' ';
        }

        console.log(`Order: ${this._idOrder} Total: ${this.calculateTotal()}, Products: ${productOrder}`);
    }
}

let product1 = new Product("Pants", 200);
let product2 = new Product("Shirt", 100);
console.log(product1.toString());
console.log(product2.toString());