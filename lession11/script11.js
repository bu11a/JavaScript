const openModalBtn = document.querySelector("#openModal")

const closeModalBtn = document.querySelector("#closeModal")

const modal = document.querySelector("#modal")

openModalBtn.addEventListener("click", function(event){
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