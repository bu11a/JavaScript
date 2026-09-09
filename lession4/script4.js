let body = document.querySelector("body");

body.innerHTML += `
<h1 class="title">Todo List</h1>
<div class="mainInput">
    <h3>Enter title:</h3>
    <input type="text" class="input" id="titleInput">
    <h3>Enter description:</h3>
    <input type="text" class="input" id="descriptionInput"><br>
    <button id="addButton">Add todo</button>
</div>
<h2 class="title">Todo List</h2>
<div class="TodoList"></div>
`

let inputTitle = document.getElementById("titleInput");
let inputDescription = document.getElementById("descriptionInput");

let addButton = document.getElementById("addButton");

let todoList = document.querySelector(".TodoList")

addButton.addEventListener("click", function(){
    let todoItem = document.createElement("div");
    todoItem.classList.add("todoItem");
    // <div class="todoItem"></div>

    todoItem.innerHTML = `
        <h3>${inputTitle.value}</h3>
        <p>${inputDescription.value}</p>
    `
    
    todoList.append(todoItem);
    
})

let score 
 

