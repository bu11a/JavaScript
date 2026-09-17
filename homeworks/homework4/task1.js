let usersBlock = document.getElementById("users");
let loadButton = document.getElementById("loadButton");
let searchInput = document.getElementById("searchInput");

let users = [];

async function loadUsers() {
    usersBlock.innerHTML = "Loading...";

    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        let data = await response.json();

        users = data;

        showUsers(users);
    } catch (error) {
        usersBlock.innerHTML = "Data losding error";
    }
}

function showUsers(usersList) {
    usersBlock.innerHTML = "";

    usersList.forEach(function(user) {
        usersBlock.innerHTML += `
            <div class="user">
                <h3>${user.name}</h3>
                <p>Email: ${user.email}</p>
                <p>Phone numbers: ${user.phone}</p>
            </div>
        `;
    });
}

loadButton.addEventListener("click", loadUsers);

searchInput.addEventListener("input", function() {
    let text = searchInput.value.toLowerCase();

    let filteredUsers = users.filter(function(user) {
        return user.name.toLowerCase().includes(text);
    });

    showUsers(filteredUsers);
});