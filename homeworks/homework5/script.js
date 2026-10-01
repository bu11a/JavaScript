let titleInput =document.getElementById("titleInput");

let bodyInput =document.getElementById("bodyInput");

let addPostBtn =document.getElementById("addPostBtn");

let postsBlock =document.querySelector(".posts");


let posts = [];


// ========================================
// GET
// Получаем посты
// ========================================

async function loadPosts() {

  try {

    postsBlock.innerHTML = "<p>Loading...</p>";


    let response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );


    if (!response.ok) {

      throw new Error("Failed to load posts");

    }

    let data = await response.json();

    posts = data.slice(0, 10);


    renderPosts(posts);

  } catch (error) {

    console.log(error);

    postsBlock.innerHTML =
      "<p>Failed to load posts</p>";

  }

}


function renderPosts(array) {

  postsBlock.innerHTML = "";

  array.forEach(function (post) {

    postsBlock.innerHTML += `

      <div class="post" data-id="${post.id}">

        <h3>
          ${post.title}
        </h3>

        <p>
          ${post.body}
        </p>

        <button class="editBtn" data-id="${post.id}">
          Edit
        </button>

        <button
          class="deleteBtn"
          data-id="${post.id}"
        >
          Delete
        </button>

      </div>

    `;

  });

}


// ========================================
// POST
// Создание нового поста
// ========================================

async function createPost() {

  if (
    titleInput.value === "" ||
    bodyInput.value === ""
  ) {

    alert("Please fill all fields!");

    return;

  }


  let newPost = {

    title: titleInput.value,

    body: bodyInput.value,

    userId: 1

  };


  try {

    let response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {

        method: "POST",

        headers: {

          "Content-Type": "application/json"

        },

        body: JSON.stringify(newPost)

      }
    );


    if (!response.ok) {

      throw new Error("Failed to create post");

    }


    let data = await response.json();


    console.log("Created post:");
    console.log(data);


    // Добавляем новый пост в наш массив
    posts.unshift(data);


    renderPosts(posts);


    // Очищаем поля
    titleInput.value = "";
    bodyInput.value = "";


  } catch (error) {

    console.log(error);

    alert("Failed to create post");

  }

}


// ========================================
// Кнопка Add post
// ========================================

addPostBtn.addEventListener(
  "click",
  createPost
);


// ========================================
// PUT
// Обновление поста
// ========================================

async function updatePost(id, title, body) {

  let updatedPost = {
    id: id,
    title: title,
    body: body,
    userId: 1
  };

  try {

    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedPost)
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update post");
    }

    let data = await response.json();

    posts = posts.map(function (post) {

      if (post.id === id) {
        return data;
      }

      return post;

    });

    renderPosts(posts);

  } catch (error) {

    console.log(error);
    alert("Failed to update post");

  }

}


// ========================================
// DELETE
// ========================================

async function deletePost(id) {

  try {

    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {

        method: "DELETE"

      }
    );


    if (!response.ok) {

      throw new Error("Failed to delete post");

    }
    let data = await response.json()
    console.log(data)

    console.log(
      `Post ${id} deleted`
    );


    // Удаляем из нашего массива
    posts = posts.filter(function (post) {

      return post.id !== id;

    });


    renderPosts(posts);


  } catch (error) {

    console.log(error);

    alert("Failed to delete post");

  }

}


// ========================================
// События внутри posts
// ========================================

postsBlock.addEventListener(
  "click",
  function (event) {

    let id = Number(event.target.dataset.id);

    // Редактирование
    if (event.target.classList.contains("editBtn")) {

      let post = posts.find(function (post) {
        return post.id === id;
      });

      let postBlock = event.target.closest(".post");

      postBlock.innerHTML = `
        <input class="editTitle" value="${post.title}">
        <textarea class="editBody">${post.body}</textarea>

        <button class="saveBtn" data-id="${id}">
          Save
        </button>

        <button class="cancelBtn" data-id="${id}">
          Cancel
        </button>
      `;

    }

    // Сохранение изменений
    if (event.target.classList.contains("saveBtn")) {

      let postBlock = event.target.closest(".post");

      let title = postBlock.querySelector(".editTitle").value.trim();
      let body = postBlock.querySelector(".editBody").value.trim();

      if (title === "" || body === "") {
        alert("Please fill all fields!");
        return;
      }

      updatePost(id, title, body);

    }

    // Отмена редактирования
    if (event.target.classList.contains("cancelBtn")) {

      renderPosts(posts);

    }

    // Удаление
    if (event.target.classList.contains("deleteBtn")) {

      deletePost(id);

    }

  }
);


// ========================================
// Загружаем посты при запуске
// ========================================

loadPosts();