import { getCart, increaseQuantity } from "./cart.js"

const cartItems = document.querySelector("#cartItems")

const totalPrice = document.querySelector("#totalPrice")

const clearCartButton = document.querySelector("#clearCart")

function renderCart() {
    const cart = getCart()

    if (cart.lenght === 0) {
        cartItems.innerHTML = `
            <p>Корзиная пустая...</p>
        `;
        totalPrice.textContent = "0";
        return;
    }
    
    cartItems.innerHTML= "";

    let total = 0

    cart.forEach(function(product){
        const element = document.createElement("div")

        element.classList.add("cart-item")

        element.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}>

            <div class="cart-info">
                <h3>
                    ${product.title}
                </h3>

                <p>
                    Цена: $${product.price}
                </p>
            </div>
            
            <div class="cart-actions">
                <button class="minus" data-id="${product.id}">-</button>
                <span>${product.quantity}</span>
                <button class="plus" data-id="${product.id}">+</button>
                <button class="delete" data-id="${product.id}">delete</button>
        `
        cartItems.append(element)

        total += product.price * product.quantity
    })
    totalPrice.textContent= total.toFixed(2);
}

renderCart()

cartItems.addEventListener("click", function(event){
    const id = Number(event.target.dataset.id)
    if (event.target.classList.contains("plus")) {
        increaseQuantity(id)
        renderCart()
    }
})