let input = document.getElementById("input");
let result = document.getElementById("result");

input.addEventListener("keydown", function(event) {
    console.log(event.key);

    if (event.key === "Enter") {
        result.textContent = input.value;
    }

    if (event.key === "Escape") {
        input.value = "";
    }
});