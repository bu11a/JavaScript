let projectName = document.getElementById("projectName")
let authorName = document.getElementById("authorName")
let projectDescription = document.getElementById("projectDescription")
let projectColor = document.getElementById("projectColors")
let textColors = document.getElementById("textColors")

let creatbtn = document.querySelector("button")

let card = document.querySelector(".card")
let cardTitle = document.querySelector(".cardTitle")
let cardName = document.querySelector(".cardName")
let cardText = document.querySelector(".cardText")
creatbtn.addEventListener("click", function create() {
    cardTitle.textContent = projectName.value
    cardName.textContent += authorName.value
    cardText.textContent = projectDescription.value

    card.style.backgroundColor = projectColor.value
    card.style.textColors = textColors.value
})