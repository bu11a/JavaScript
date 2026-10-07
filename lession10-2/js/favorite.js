let favorites = JSON.parse(localStorage.getItem("favorites")) || []

const favoriteBtn = document.querySelector("#favorite")

const closeModalBtn = document.querySelector("#closeModal")

const modal = document.querySelector("#modal")

const favoriteItems = document.querySelector(".favoriteItems")

favoriteBtn.addEventListener("click", function(event){
        modal.classList.add("active")
})

closeModalBtn.addEventListener("click", function(event){
        modal.classList.remove("active")
})

modal.addEventListener("click", function(event){
    if (event.target === modal) {
        modal.classList.remove("active")
    }
})

document.addEventListener("keydown", function(event){
    if (event.key === "Escape") {
        modal.classList.remove("active")
    }
}) 

export function addToFavorites(product) {
    const item = favorites.find(function (item) {
        return item.id === product.id;
    })
    if (item){
        alert("Товар уже добвален")
        return
    }else{

        favorites.push({
            id: product.id,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail,
        });
    }
    saveFavorites();
}

function renderFavorites() {

    if (favorites.lenght === 0) {
        favoriteItems.innerHTML = `
            <p>Избранных нету...</p>
        `;
        return;
    }
    
    favoriteItems.innerHTML= "";

    let total = 0

    favorites.forEach(function(product){
        const element = document.createElement("div")

        element.classList.add("favorite-item")

        element.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}>

            <div class="favorites-info">
                <h3>
                    ${product.title}
                </h3>

                <p>
                    Цена: $${product.price}
                </p>
            </div>
            
            <button class="delete" data-id="${product.id}">delete</button>
        `
        favoriteItems.append(element)

    })
}

renderFavorites()

function saveFavorites() {
    localStorage.setItem("favorites", JSON.stringify(favorites));
}


favoriteItems.addEventListener ("click", function(event){
    if(event.target.classList.contains("delete")){
        const id = Number(event.target.dataset.id)
        let item = favorites.find(function(item){
            return item.id=== id
        })
        if (item){
            favorites = favorites.filter(function(product){
                return product.id !== id
            })
            saveFavorites()
            renderFavorites()
        }
    }
})
