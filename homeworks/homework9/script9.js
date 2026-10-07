let wishes = JSON.parse(localStorage.getItem("wishes")) || [];

const nameInput = document.getElementById("nameInput");
const priceInput = document.getElementById("priceInput");
const addButton = document.getElementById("addButton");
const wishlist = document.getElementById("wishlist");
const count = document.getElementById("count");
const error = document.getElementById("error");

function saveWishes() {
    localStorage.setItem("wishes", JSON.stringify(wishes));
}

function showWishes() {
    wishlist.innerHTML = "";

    count.textContent = wishes.length;

    if (wishes.length === 0) {
        wishlist.textContent = "Список желаний пуст";
        return;
    }

    wishes.forEach(function(wish) {
        const item = document.createElement("div");
        item.classList.add("item");

        if (wish.bought) {
            item.classList.add("bought");
        }

        const name = document.createElement("span");
        name.textContent = wish.name + " - " + wish.price + " ₸";

        const boughtButton = document.createElement("button");
        boughtButton.textContent = wish.bought ? "Не куплено" : "Куплено";

        boughtButton.addEventListener("click", function() {
            const selectedWish = wishes.find(function(w) {
                return w.id === wish.id;
            });

            selectedWish.bought = !selectedWish.bought;

            saveWishes();
            showWishes();
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";

        deleteButton.addEventListener("click", function() {
            wishes = wishes.filter(function(w) {
                return w.id !== wish.id;
            });

            saveWishes();
            showWishes();
        });

        item.appendChild(name);
        item.appendChild(boughtButton);
        item.appendChild(deleteButton);

        wishlist.appendChild(item);
    });
}

addButton.addEventListener("click", function() {
    const name = nameInput.value.trim();
    const price = Number(priceInput.value);

    error.textContent = "";

    if (name === "") {
        error.textContent = "Введите название";
        return;
    }

    if (isNaN(price) || price <= 0) {
        error.textContent = "Цена должна быть числом больше 0";
        return;
    }

    const wish = {
        id: Date.now(),
        name: name,
        price: price,
        bought: false
    };

    wishes.push(wish);

    saveWishes();
    showWishes();

    nameInput.value = "";
    priceInput.value = "";
});

showWishes();
