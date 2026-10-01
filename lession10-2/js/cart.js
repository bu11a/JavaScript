let cart = JSON.parse(localStorage.getItem("cart")) || []

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}
// localStorage.clear();
export function addToCart(product) {
    const item = cart.find(function (item) {
        return item.id === product.id;
    })
    if (item) {
        item.quantity++;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail,
            quantity: 1
        });
    }
    saveCart();
}

export function getCartCount() {
    // let count = 0;

    // cart.forEach(function(item) {
    //     count += item.quantity;
    // })
    // return count;

    return cart.reduce(function(sum, item) {
        return sum + item.quantity;
    }, 0);
}

export function getCart(){
    return cart;
}

export function increaseQuantity(id) {
    const item = cart.find(function(item){
        return item.id === id
    })
    if (item) {
        item.quantity++
    }
    saveCart()
}