// inputs
let todoTitle = document.getElementById("todoTitle");
let todoDescription = document.getElementById("todoDescription");
let todoDeadline = document.getElementById("todoDeadline");

// main button
let addTodoBtn = document.getElementById("addTodoBtn");

// (div)todo list with tasks
let todoList = document.querySelector(".todoList");

// counter of todoes
let todoCount = document.getElementById("todoCount")

// sort buttons
let allBtn = document.getElementById("allBtn")
let activeBtn = document.getElementById("activeBtn")
let completedBtn = document.getElementById("completedBtn")

let todos = []


addTodoBtn.addEventListener("click", function() {

    if (
        todoTitle.value === "" ||
        todoDescription.value === "" ||
        todoDeadline.value === ""
    ) {
        alert("Please fill all fields!");
        return;
    }

    let todo = {
        id: Date.now(),
        title: todoTitle.value,
        description: todoDescription.value,
        deadline: todoDeadline.value,
        completed: false
    }

    todos.push(todo)


    // Очищаем input
    todoTitle.value = "";
    todoDescription.value = "";
    todoDeadline.value = "";
    // Вывод всех задач
    renderTodos(todos);
});

function renderTodos(array) {
    todoList.innerHTML =""
    
    array.forEach(function(todo) {
        todoList.innerHTML += `
        <div class="todoItem ${todo.completed ? "compleeted" : ""}">
            <h3>${todo.title}</h3>
            <p>${todo.description}</p>
            <p>${todo.deadline}</p>
            <div>
                <button
                class="deleteBtn"
                data-id=${todo.id}>
                Удалить
                </button>
                <button
                class="completeBtn" data-id=${todo.id}>
                ${todo.completed ? "Undo" : "Complete"}
                </button>

            </div>
        </div>
        `
        todoCount.innerHTML = `Total tasks: ${todos.lenght}`;
        console.log(todos)
    });
}

todoList.addEventListener("click", function(event){
    if(event.target.classList.contains("deletBtn")) {
        let id = Number(event.target.dataset.id);

        todos = todos.filter(function(todo){
            return todo.id !== id
        })
        renderTodos(todos);
    }
})


