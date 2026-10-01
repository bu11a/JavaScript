let titleInput = document.getElementById("titleInput");
let bodyInput = document.getElementById("bodyInput");
let addPostBtn = document.getElementById("addPostBtn");

let postsBlock = document.querySelector(".posts");

let posts = [];
const url = "https://jsonplaceholder.typicode.com/todos";

test.loadPosts()

// async function loadPosts() {
//     try {
//         postsBlock.innerHTML = "<p>Loading...</p>";

//         let responce = await fetch(url);

//         if (!responce.ok) {
//             throw new Error("Failed to load...")
//         }

//         let data = await responce.json()

//         posts = data.slice(0, 10);

//         renderPosts(posts);
//     } catch (error) {
//         console.log(error);
//         postsBlock.innerHTML = "<p>Failed to load</p>"
//     }
// }


// function renderPosts(array) {
//     postsBlock.innerHTML = "";

//     array.forEach(function (post) {
//         postsBlock.innerHTML += `
//             <div class="post">
//                 <h3>${post.title}</h3>
//                 <button 
//                     class="deleteBtn"
//                     data-id="${post.id}"
//                     >
//                 Delete</button>
//                 <button 
//                     class="completeBtn"
//                     data-id="${post.id}"
//                     >
//                 ${post.completed ? "Undo" : "Complete"}</button>
//             </div>
//         `
//     });
// }

// loadPosts();


// async function createPost() {
//     if (titleInput.value === "") {
//         alert("Please fill all fields!")
//         return
//     }

//     let newPost = {
//         title: titleInput.value,
//         // body: bodyInput.value,
//         completed: false,
//         userId: 1
//     };

//     try {
//         let responce = await fetch(url, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(newPost)
//         });

//         if (!responce.ok) {
//             throw new Error("Failed to create post...")
//         }

//         let data = await responce.json()

//         console.log("Created post")
//         console.log(data)

//         posts.unshift(data);

//         renderPosts(posts);

//         titleInput.value = "";
//         // bodyInput.value = "";
//     } catch (error) {
//         console.log(error);
//         alert("Failed to create post...");
//     }
// }



// async function deletePost(id) {
//     try {
//         let responce = await fetch(url + `/${id}`,
//             {
//                 method: "DELETE"
//             }
//         );
//         if (!responce.ok) {
//             throw new Error("Failed to delete post...")
//         }

//         console.log("Deleted post:" + id);

//         posts = posts.filter(function (post) {
//             return post.id !== id;
//         })

//         renderPosts(posts)

//     } catch (error) {
//         console.log(error)
//         alert("Failed to delete post...")
//     }
// }


postsBlock.addEventListener("click", function (event) {
    if (event.target.classList.contains("deleteBtn")) {
        let id = Number(event.target.dataset.id);
        deletePost(id);
    }
    if (event.target.classList.contains("completetBtn")) {
        let id = Number(event.target.dataset.id);
        completedBtn(id);
    }
});


// async function completedBtn(id) {
//     try {
//         let newStatus = {
//             completed: true
//         }

//         let responce = await fetch(url + `/${id}`,
//             {
//                 method: "PATCH",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(newStatus)
//             }
//         );
//         if (!responce.ok) {
//             throw new Error("Failed to delete post...")
//         }

//         let todo = posts.find(function(todo) {
//             return todo.id === id;
//         })
//         todo.completed = true;

//         renderPosts(posts)
//     } catch (error) {
//         console.log(error)
//         alert("Failed to delete post...")
//     }
// }

import * as test from "./test.js"

export { postsBlock, } 