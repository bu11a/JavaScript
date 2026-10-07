const users = [
    {
        name: "Алексей",
        info: "Город: Алматы. Профессия: программист."
    },
    {
        name: "Мария",
        info: "Город: Астана. Интересы: музыка и рисование."
    },
    {
        name: "Данил",
        info: "Город: Шымкент. Профессия: дизайнер."
    }
];

const buttons = document.querySelectorAll(".more");
const modal = document.getElementById("modal");
const modalName = document.getElementById("modalName");
const modalInfo = document.getElementById("modalInfo");
const closeButton = document.getElementById("closeButton");
const close = document.getElementById("close");

buttons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        const id = event.target.dataset.id;
        const user = users[id];

        modalName.textContent = users.name;
        modalInfo.textContent = user.info;

        modal.classList.add("show");
    });
});

closeButton.addEventListener("click", function() {
    modal.classList.remove("show");
});

close.addEventListener("click", function() {
    modal.classList.remove("show");
});

modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        modal.classList.remove("show");
    }
});
