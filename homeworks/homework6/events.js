import { createPost, deletePost } from "./posts.js";

let addPostBtn = document.getElementById("addPostBtn");
let postsBlock = document.querySelector(".posts");

addPostBtn.addEventListener("click", createPost);

postsBlock.addEventListener("click", function(event) {
    if (event.target.classList.contains("deleteBtn")) {
        let id = Number(event.target.dataset.id);
        deletePost(id);
    }
});