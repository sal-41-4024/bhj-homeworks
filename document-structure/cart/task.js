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
        const cart_products = this.#cart.getElementsByClassName("cart__products")[0];

        const cart_product = document.createElement("div");
        cart_product.className = "cart__product";
        cart_product.dataset.id = product.id

        const cart_product_image = document.createElement("img");
        cart_product_image.className = "cart__product-image";
        cart_product_image.src = product.src;

        const cart_product_count = document.createElement("div");
        cart_product_count.className = "cart__product-count";
        cart_product_count.innerText = 0;

        cart_product.appendChild(cart_product_image);
        cart_product.appendChild(cart_product_count);
        cart_products.appendChild(cart_product);
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

    const prod_obj = new Product(product);
    const cart_obj = new Cart(cart);

    inc.addEventListener("click", (e) => {
        prod_obj.inc();

    });

    dec.addEventListener("click", (e) => {
        prod_obj.dec();

    });

    addBtn.addEventListener("click", (e) => {
        cart_obj.addProduct(prod_obj);
    });
});
