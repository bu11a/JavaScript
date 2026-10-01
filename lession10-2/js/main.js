import { getProducts } from "./api.js";
import { renderProducts } from "./products.js";
import { addToCart, getCartCount } from "./cart.js";

const message = document.querySelector("#message")

const searchInput = document.querySelector("#searchInput")
const categorySelect = document.querySelector("#categorySelect")

const productsContainer = document.querySelector("#products")

const cartCount = document.querySelector("#cartCount")


let products = []

async function start() {
    message.innerHTML = "Загрузка...";

    products = await getProducts()
    
    message.innerHTML = "";

    renderProducts(products);

    renderCategories();

    updateCartCount();
}

start()


function renderCategories() {
    let categories = [];

    products.forEach(function(product) {
        if (!categories.includes(product.category)) {
            categories.push(product.category);
        }
    });

    categories.forEach(function(category) {
        const option = document.createElement("option");

        option.value = category
        option.textContent = category
        categorySelect.append(option);
    });
}


function filterProducts() {
    const search = searchInput.value;
    const category = categorySelect.value;

    const filtered = products.filter(function (product) {
        const matchSearch = product.title.toLowerCase().includes(search);
        const matchCategory = category === "all" || category === product.category;

        return (matchCategory && matchSearch)
    });

    renderProducts(filtered);
}

searchInput.addEventListener("input", filterProducts);
categorySelect.addEventListener("change", filterProducts);

productsContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("add-cart")) {
        const id = Number(event.target.dataset.id)

        const product = products.find(function (product) {
            return product.id === id;
        });

        if (product) {
            addToCart(product);
            updateCartCount();
        }
    }
});

function updateCartCount() {
    cartCount.textContent = getCartCount();
}