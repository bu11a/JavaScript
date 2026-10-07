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
            <button class="add-favorites" data-id=${product.id}>В избранные</button>
            <button class="show-detail" data-id=${product.id}>О товаре</button>
        `

        container.append(card)
    })
}

export function renderProductDetail(product) {
    const productDetail = document.querySelector("#productDetail")
    const productModal = document.querySelector(".productModal")
    productModal.innerHTML = "";
    productModal.classList.add("modal-content")
    console.log(productDetail)

    productDetail.classList.add("active")

    productModal.innerHTML=`
        <img
        src="${product.thumbnail}"
        alt="${product.title}"
        >
        <h3>${product.title}</h3>

        <p>Категория: ${product.category}</p>
        <p>Рейтинг: ${product.rating}</p>
        <p class="product-price">${product.price}$</p>
        <p class="product-describtion">${product.describtion}
    `
}