class Product {
    #product;
    #amount;
    #id;
    #src;

    constructor (product) {
        this.#product = product;
        this.#amount = Number(this.#product.querySelector(".product__quantity-value").innerText);
        this.#id = this.#product.dataset.id;
        this.#src = this.#product.querySelector("img.product__image").src;
    }

    get amount () {
        return this.#amount;
    }

    get id () {
        return this.#id;
    }

    get src () {
        return this.#src;
    }

    inc () {
        this.#amount++;
        this.#changeAmount();
    }

    dec () {
        if (this.amount > 1) {
            this.#amount--;
            this.#changeAmount();
        }
    }

    #changeAmount() {
        const value = this.#product.querySelector(".product__quantity-value");
        value.innerText = this.amount;
    }
}

class Cart {
    #cart;
    #products;

    constructor (cart) {
        if (cart) {
            this.#cart = cart
            this.#products = this.#getProducts();
        }
    }

    addProduct(product) {
        if (this.#ProductExists(product.id)) {
            this.#addAmount(product);
        } else {
            this.#addProductDiv(product);
            this.#addAmount(product);
        }
        this.#products = this.#getProducts()
    }

    #getProducts() {
        return Array.from(this.#cart.querySelector(".cart__products").querySelectorAll(".cart__product"));
    }

    #addProductDiv(product) {
        const cartProducts = this.#cart.getElementsByClassName("cart__products")[0];
        const addProduct = 
            `<div class="cart__product" data-id="${product.id}">
                <img class="cart__product-image" src="${product.src}">
                <div class="cart__product-count">${0}</div>
            </div>`
        cartProducts.innerHTML += addProduct;
    }

    #addAmount(product) {
        const foundProduct = document.querySelector(`[data-id="${product.id}"]`);
        const amount = foundProduct.querySelector(".cart__product-count");
        amount.innerText = parseInt(amount.innerText) + product.amount;
    }

    #ProductExists(id) {
        return this.#products.find(item => item.dataset.id === id);
    }
}

const products = Array.from(document.getElementsByClassName("product"));
const cart = document.getElementsByClassName("cart")[0];

products.forEach ((product) => {
    const inc = product.querySelector(".product__quantity-control.product__quantity-control_inc");
    const dec = product.querySelector(".product__quantity-control.product__quantity-control_dec");
    const addBtn = product.querySelector(".product__add");

    const prodObj = new Product(product);
    const cartObj = new Cart(cart);

    inc.addEventListener("click", (e) => {
        prodObj.inc();

    });

    dec.addEventListener("click", (e) => {
        prodObj.dec();

    });

    addBtn.addEventListener("click", (e) => {
        cartObj.addProduct(prodObj);
    });
});
