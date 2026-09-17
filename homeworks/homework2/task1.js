let card = document.getElementById("card");

card.addEventListener("click", function() {
    card.textContent = "Clicked!";
});

card.addEventListener("dblclick", function() {
    card.textContent = "Double click!";
});

card.addEventListener("mouseenter", function() {
    card.classList.add("active");
});

card.addEventListener("mouseleave", function() {
    card.classList.remove("active");
});