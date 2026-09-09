//ВНИМАНИЕ я удалил все файлы с прошлого учеб года чтоб не путаться вседомашки пронумерованы с сентября

const card = document.getElementById("card");
const stateText = document.getElementById("stateText");
const buttons = document.querySelectorAll("button");

function resetState() {
    card.classList.remove("calm", "warning", "stop");
    card.classList.add("calm");

    stateText.textContent = "Спокойно";
}

// Один обработчик click для всех трёх кнопок
buttons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        const state = event.target.dataset.state;

        card.classList.remove("calm", "warning", "stop");
        card.classList.add(state);

        if (state === "calm") {
            stateText.textContent = "Спокойно";
        }

        if (state === "warning") {
            stateText.textContent = "Внимание";
        }

        if (state === "stop") {
            stateText.textContent = "Стоп";
        }
    });
});

// Двойной клик возвращает начальное состояние
card.addEventListener("dblclick", function(event) {
    resetState();
});

// Правый клик меняет цвет фона
card.addEventListener("contextmenu", function(event) {
    event.preventDefault();

    document.body.style.backgroundColor = "#d6e4ff";
});

// Escape возвращает начальное состояние
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        resetState();
    }
});