let form = document.getElementById("form");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let result = document.getElementById("result");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (nameInput.value === "" || emailInput.value === "") {
        alert("Please fill in all fields");
    } else {
        result.textContent = "Registration successful!";
    }
});