let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const numberInput = document.getElementById("numberInput");
const checkButton = document.getElementById("checkButton");
const restartButton = document.getElementById("restartButton");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");

checkButton.addEventListener("click", function() {
    let userNumber = Number(numberInput.value);

    if (userNumber < 1 || userNumber > 100) {
        message.textContent = "Введите число от 1 до 100";
        return;
    }

    attempts++;
    attemptsText.textContent = attempts;

    if (userNumber > randomNumber) {
        message.textContent = "Загаданное число меньше";
    } else if (userNumber < randomNumber) {
        message.textContent = "Загаданное число больше";
    } else {
        message.textContent = "Вы угадали!";
    }
});

restartButton.addEventListener("click", function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    attemptsText.textContent = attempts;
    message.textContent = "Введите число";
    numberInput.value = "";
});
