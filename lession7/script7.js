let login = document.getElementById("login"); 
let password = document.getElementById("password"); 
 
let add = document.getElementById("add"); 
let show = document.getElementById("show"); 
let del = document.getElementById("delete"); 
let clear = document.getElementById("clear"); 
 
let users = JSON.parse(localStorage.getItem("users")) || []; 
showUsers();  
 
add.addEventListener("click", function() { 
    if (login.value === "" || password.value === "") { 
        alert("Заполните все поля"); 
        return; 
    } 
 
    let user = { 
        login: login.value, 
        password: password.value 
    }; 
 
    users.push(user); 
 
    localStorage.setItem("users", JSON.stringify(users)); 
 
    login.value = ""; 
    password.value = ""; 
 
    showUsers()
 
    alert("Пользователь добавлен"); 
}); 
 
show.addEventListener("click", function() { 
    let usersBlock = document.getElementById("users"); 
 
    usersBlock.innerHTML = ""; 
 
    users.forEach(function(user, index) { 
        usersBlock.innerHTML += ` 
            <div class="user"> 
                Пользователь ${index + 1}<br> 
                Логин: ${user.login}<br> 
                Пароль: ${user.password} 
            </div> 
        `; 
    }); 
}); 
 
del.addEventListener("click", function() { 
    localStorage.removeItem("users"); 
 
    users = []; 
 
    document.getElementById("users").innerHTML = ""; 
}); 
 
clear.addEventListener("click", function() { 
    login.value = ""; 
    password.value = ""; 
}); 
 
function showUsers() { 
    let usersBlock = document.getElementById("users"); 
 
    usersBlock.innerHTML = ""; 
 
    users.forEach(function(user, index) { 
        usersBlock.innerHTML += ` 
            <div class="user"> 
                Пользователь ${index + 1}<br> 
                Логин: ${user.login}<br> 
                Пароль: ${user.password}<br>
                <button class="deleteUser">Удалить</button> 
            </div> 
        `; 
    });

    let deleteButtons = document.querySelectorAll(".deleteUser"); 
 
    deleteButtons.forEach(function(button, index) { 
        button.addEventListener("click", function() { 
            users.splice(index, 1); 
 
            localStorage.setItem("users", JSON.stringify(users)); 
 
            showUsers(); 
        }); 
    }); 
}