export function renderProducts(products) {
    const container = document.querySelector("#products");

    container.innerHTML = "";

    if (products.lenght === 0) {
        container.innerHTML = "<p>Товары не найдены</p>";

        return;
    }

    products.forEach(function(product) {
        const card = document.createElement("div")
        card.classList.add("product")

        card.innerHTML = `
            <img
            src="${product.thumbnail}"
            alt="${product.title}"
            >
            <h3>${product.title}</h3>

            <p>Категория: ${product.category}</p>
            <p>Рейтинг: ${product.rating}</p>
            <p class="product-price">${product.price}$</p>
            <button class="add-cart" data-id=${product.id}>В корзину</button>
        `

        container.append(card)
    })
}