const nameInput = document.getElementById("nameInput");
const themeSelect = document.getElementById("themeSelect");
const result = document.getElementById("result");

document.getElementById("saveButton").onclick = function() {
    localStorage.setItem("name", nameInput.value);
    localStorage.setItem("theme", themeSelect.value);

    showData();
};

function showData() {
    const name = localStorage.getItem("name");
    const theme = localStorage.getItem("theme");

    result.innerHTML =
        "Имя: " + name + "<br>" +
        "Тема: " + theme;
}

document.getElementById("resetButton").onclick = function() {
    localStorage.removeItem("name");
    localStorage.removeItem("theme");

    result.innerHTML = "";
    nameInput.value = "";
};

if (localStorage.getItem("name")) {
    nameInput.value = localStorage.getItem("name");
    themeSelect.value = localStorage.getItem("theme");

    showData();
}